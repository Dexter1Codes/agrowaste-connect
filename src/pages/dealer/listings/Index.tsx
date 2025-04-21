
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DealerLayout from "@/components/dealer/DealerLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Star, Filter, ShoppingCart, Search, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/components/ui/use-toast";

interface WasteListing {
  id: string;
  title: string;
  description: string;
  waste_type: string;
  quantity: number;
  unit: string;
  price: number;
  images: string[];
  created_at: string;
  user_id: string;
  location: string | null; // Add location property with null as possible value
  available?: boolean;
  currency?: string;
  updated_at?: string;
}

const BrowseListings = () => {
  const navigate = useNavigate();
  const { addItem, getTotalItems } = useCart();
  const [listings, setListings] = useState<WasteListing[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [minRating, setMinRating] = useState<number>(0);
  const [showFilters, setShowFilters] = useState(false);
  
  useEffect(() => {
    // Set up real-time subscription for new listings
    const channel = supabase
      .channel('public:waste_listings')
      .on('postgres_changes', { 
        event: 'INSERT', 
        schema: 'public', 
        table: 'waste_listings',
      }, payload => {
        console.log("New listing received:", payload);
        const newListing = payload.new as WasteListing;
        
        // Add the new listing to our state
        setListings(prev => [newListing, ...prev]);
        
        // Show a notification about the new listing
        toast({
          title: "New listing available!",
          description: `${newListing.title} - ${newListing.quantity} ${newListing.unit} available at ₹${newListing.price}/${newListing.unit}`,
          action: (
            <Button 
              variant="outline" 
              onClick={() => {
                // Scroll to the new listing or navigate to a specific view
                navigate("/dealer/listings", { replace: true });
              }}
            >
              View Now
            </Button>
          )
        });
      })
      .on('postgres_changes', { 
        event: 'UPDATE', 
        schema: 'public', 
        table: 'waste_listings',
      }, payload => {
        console.log("Listing updated:", payload);
        const updatedListing = payload.new as WasteListing;
        
        // Update the listing in our state
        setListings(prev => prev.map(listing => 
          listing.id === updatedListing.id ? updatedListing : listing
        ));
      })
      .on('postgres_changes', { 
        event: 'DELETE', 
        schema: 'public', 
        table: 'waste_listings',
      }, payload => {
        console.log("Listing deleted:", payload);
        const deletedListingId = payload.old.id;
        
        // Remove the listing from our state
        setListings(prev => prev.filter(listing => listing.id !== deletedListingId));
      })
      .subscribe();
    
    // Fetch initial listings
    fetchListings();
    
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);
  
  const fetchListings = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from("waste_listings")
        .select("*")
        .eq("available", true)
        .order("created_at", { ascending: false });
        
      if (error) throw error;
      
      // Add location property if it's missing in any listing from the database
      const listingsWithLocation = data?.map(listing => ({
        ...listing,
        location: listing.location || 'Unknown location'
      })) || [];
      
      setListings(listingsWithLocation);
      
      console.log("Fetched listings:", listingsWithLocation);
    } catch (error) {
      console.error("Error fetching listings:", error);
      toast({
        title: "Error",
        description: "Failed to fetch listings. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  
  const filteredListings = listings.filter(listing => {
    // Search filter
    if (searchQuery && !listing.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Waste type filter
    if (selectedTypes.length > 0 && !selectedTypes.includes(listing.waste_type)) {
      return false;
    }
    
    // Price filter
    if (listing.price < priceRange[0] || listing.price > priceRange[1]) {
      return false;
    }
    
    // For now, we don't have real location data, so we'll skip this filter
    // In a real application, you would add location filtering here
    
    // For now, we don't have ratings, so we'll skip this filter
    // In a real application, you would add rating filtering here
    
    return true;
  });
  
  const handleAddToCart = (listing: WasteListing) => {
    addItem({
      id: listing.id,
      title: listing.title,
      quantity: 1,
      price: listing.price,
      max_quantity: listing.quantity,
      unit: listing.unit,
      image: listing.images?.[0] || undefined,
      user_id: listing.user_id || "", // Make sure user_id is included
    });
  };
  
  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedTypes([]);
    setPriceRange([0, 100]);
    setSelectedLocation("");
    setMinRating(0);
  };
  
  const wasteTypeOptions = [
    { value: "coconut_husks", label: "Coconut Husk" },
    { value: "banana_peels", label: "Banana Peels" },
    { value: "rice_husks", label: "Rice Husks" },
    { value: "sugarcane_bagasse", label: "Sugarcane Bagasse" },
    { value: "other", label: "Other" },
  ];
  
  const formatWasteType = (type: string) => {
    const option = wasteTypeOptions.find(opt => opt.value === type);
    return option ? option.label : type.replace(/_/g, ' ');
  };
  
  
  return (
    <DealerLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-900">Browse Waste Listings</h1>
          
          <div className="flex gap-2">
            <div className="relative flex-grow">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search listings..."
                className="pl-8 w-full md:w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" onClick={() => setShowFilters(!showFilters)}>
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <Button
              variant="outline"
              className="relative"
              onClick={() => navigate("/dealer/cart")}
            >
              <ShoppingCart className="h-4 w-4" />
              {getTotalItems() > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center">
                  {getTotalItems()}
                </Badge>
              )}
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          <Card className={`p-4 space-y-6 h-fit lg:sticky lg:top-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <h3 className="font-medium border-b pb-2">Filters</h3>
            
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Waste Type</h4>
              <div className="space-y-2">
                {wasteTypeOptions.map(option => (
                  <div key={option.value} className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      id={option.value} 
                      className="rounded border-gray-300"
                      checked={selectedTypes.includes(option.value)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedTypes([...selectedTypes, option.value]);
                        } else {
                          setSelectedTypes(selectedTypes.filter(type => type !== option.value));
                        }
                      }}
                    />
                    <Label htmlFor={option.value}>{option.label}</Label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Location</h4>
              <Select 
                value={selectedLocation} 
                onValueChange={setSelectedLocation}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bangalore">Bangalore</SelectItem>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="mumbai">Mumbai</SelectItem>
                  <SelectItem value="chennai">Chennai</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <h4 className="text-sm font-medium">Price Range</h4>
                <span className="text-sm text-gray-500">₹{priceRange[0]} - ₹{priceRange[1]}</span>
              </div>
              <Slider 
                defaultValue={[0, 100]} 
                min={0} 
                max={100} 
                step={1} 
                value={priceRange}
                onValueChange={(value) => setPriceRange(value as [number, number])}
              />
            </div>
            
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Farmer Rating</h4>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star}
                    className={`h-4 w-4 cursor-pointer ${star <= minRating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                    onClick={() => setMinRating(star)}
                  />
                ))}
                <span className="text-sm text-gray-500 ml-1">
                  {minRating > 0 ? `& Up` : ''}
                </span>
              </div>
            </div>
            
            <div className="pt-2 flex gap-2">
              <Button variant="outline" className="w-1/2" onClick={handleResetFilters}>Reset</Button>
              <Button className="w-1/2" onClick={() => setShowFilters(false)}>Apply</Button>
            </div>
          </Card>
          
          {/* Listing cards */}
          <div className="lg:col-span-3 space-y-6">
            {isLoading ? (
              <div className="flex justify-center items-center h-40">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : filteredListings.length === 0 ? (
              <Card className="p-6 text-center">
                <h3 className="font-medium mb-2">No listings found</h3>
                <p className="text-gray-500">
                  No waste listings match your current filters.
                </p>
                <Button variant="outline" className="mt-4" onClick={handleResetFilters}>
                  Reset Filters
                </Button>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredListings.map((listing) => (
                  <Card key={listing.id} className="overflow-hidden">
                    <div className="relative h-48 bg-gray-100">
                      {listing.images?.[0] ? (
                        <img 
                          src={listing.images[0]} 
                          alt={listing.title} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-gray-400">No Image</span>
                        </div>
                      )}
                    </div>
                    <div className="p-4 space-y-4">
                      <div>
                        <h3 className="font-medium text-lg">{listing.title}</h3>
                        <Badge variant="outline" className="mt-1">
                          {formatWasteType(listing.waste_type)}
                        </Badge>
                        {listing.location && (
                          <p className="text-sm text-gray-500 mt-1">
                            📍 {listing.location}
                          </p>
                        )}
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <Star className="h-3 w-3 text-gray-300" />
                          <span className="text-xs text-gray-500">(16)</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-gray-500 text-sm">Quantity</p>
                          <p className="font-medium">{listing.quantity} {listing.unit}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-gray-500 text-sm">Price</p>
                          <p className="font-bold text-primary">₹{listing.price}/{listing.unit}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">Make Offer</Button>
                        <Button 
                          size="sm" 
                          className="flex-1"
                          onClick={() => handleAddToCart(listing)}
                        >
                          <ShoppingCart className="h-4 w-4 mr-1" />
                          Add
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
            
            {!isLoading && filteredListings.length > 0 && (
              <div className="flex justify-center">
                <Button variant="outline">Load More</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </DealerLayout>
  );
};

export default BrowseListings;
