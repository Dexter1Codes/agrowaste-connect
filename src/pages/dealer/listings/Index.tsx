
import DealerLayout from "@/components/dealer/DealerLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Star, Filter, ShoppingCart, Search } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const BrowseListings = () => {
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
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters sidebar */}
          <Card className="p-4 space-y-6 h-fit lg:sticky lg:top-6">
            <h3 className="font-medium border-b pb-2">Filters</h3>
            
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Waste Type</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="coconut" className="rounded border-gray-300" />
                  <Label htmlFor="coconut">Coconut Husk</Label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="banana" className="rounded border-gray-300" />
                  <Label htmlFor="banana">Banana Peels</Label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="rice" className="rounded border-gray-300" />
                  <Label htmlFor="rice">Rice Husks</Label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="sugarcane" className="rounded border-gray-300" />
                  <Label htmlFor="sugarcane">Sugarcane Bagasse</Label>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Location</h4>
              <Select>
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
                <span className="text-sm text-gray-500">₹0 - ₹100</span>
              </div>
              <Slider defaultValue={[0, 100]} min={0} max={100} step={1} />
            </div>
            
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Farmer Rating</h4>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 text-gray-300" />
                <Star className="h-4 w-4 text-gray-300" />
                <span className="text-sm text-gray-500 ml-1">& Up</span>
              </div>
            </div>
            
            <div className="pt-2 flex gap-2">
              <Button variant="outline" className="w-1/2">Reset</Button>
              <Button className="w-1/2">Apply</Button>
            </div>
          </Card>
          
          {/* Listing cards */}
          <div className="lg:col-span-3 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {/* Listing card 1 */}
              <Card className="overflow-hidden">
                <div className="relative h-48 bg-gray-100">
                  <img 
                    src="https://via.placeholder.com/500x300?text=Coconut+Husk" 
                    alt="Coconut Husk" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 space-y-4">
                  <div>
                    <h3 className="font-medium text-lg">Coconut Husk</h3>
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
                      <p className="font-medium">500 kg</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-500 text-sm">Price</p>
                      <p className="font-bold text-primary">₹8/kg</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">Make Offer</Button>
                    <Button size="sm" className="flex-1">
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Add
                    </Button>
                  </div>
                </div>
              </Card>
              
              {/* Listing card 2 */}
              <Card className="overflow-hidden">
                <div className="relative h-48 bg-gray-100">
                  <img 
                    src="https://via.placeholder.com/500x300?text=Rice+Husks" 
                    alt="Rice Husks" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 space-y-4">
                  <div>
                    <h3 className="font-medium text-lg">Rice Husks</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-gray-500">(28)</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-500 text-sm">Quantity</p>
                      <p className="font-medium">1000 kg</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-500 text-sm">Price</p>
                      <p className="font-bold text-primary">₹5/kg</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">Make Offer</Button>
                    <Button size="sm" className="flex-1">
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Add
                    </Button>
                  </div>
                </div>
              </Card>
              
              {/* Listing card 3 */}
              <Card className="overflow-hidden">
                <div className="relative h-48 bg-gray-100">
                  <img 
                    src="https://via.placeholder.com/500x300?text=Sugarcane+Bagasse" 
                    alt="Sugarcane Bagasse" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 space-y-4">
                  <div>
                    <h3 className="font-medium text-lg">Sugarcane Bagasse</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <Star className="h-3 w-3 text-gray-300" />
                      <Star className="h-3 w-3 text-gray-300" />
                      <span className="text-xs text-gray-500">(7)</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-500 text-sm">Quantity</p>
                      <p className="font-medium">750 kg</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-500 text-sm">Price</p>
                      <p className="font-bold text-primary">₹3/kg</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">Make Offer</Button>
                    <Button size="sm" className="flex-1">
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Add
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="flex justify-center">
              <Button variant="outline">Load More</Button>
            </div>
          </div>
        </div>
      </div>
    </DealerLayout>
  );
};

export default BrowseListings;
