
import DealerLayout from "@/components/dealer/DealerLayout";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  CheckCircle2, 
  XCircle, 
  Download, 
  Truck, 
  FileEdit,
  Trash2
} from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

const DealerOrders = () => {
  return (
    <DealerLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Orders & Offers Management</h1>
        
        <Tabs defaultValue="offers">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="offers">My Offers</TabsTrigger>
            <TabsTrigger value="orders">My Orders</TabsTrigger>
          </TabsList>
          
          <TabsContent value="offers" className="mt-6">
            <Card className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <h2 className="text-lg font-medium">Submitted Offers</h2>
                <Button>Make New Offer</Button>
              </div>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Item</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Offered Price</TableHead>
                      <TableHead>Farmer</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Coconut Husk</TableCell>
                      <TableCell>200kg</TableCell>
                      <TableCell>₹7/kg</TableCell>
                      <TableCell>Ramesh Farms</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="text-yellow-500 text-sm">Pending</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <FileEdit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Rice Husks</TableCell>
                      <TableCell>500kg</TableCell>
                      <TableCell>₹4.5/kg</TableCell>
                      <TableCell>Green Valley</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-1" />
                          <span className="text-green-500 text-sm">Accepted</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline">
                          Checkout
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Sugarcane Bagasse</TableCell>
                      <TableCell>100kg</TableCell>
                      <TableCell>₹2.5/kg</TableCell>
                      <TableCell>Pure Organics</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <XCircle className="h-4 w-4 text-red-500 mr-1" />
                          <span className="text-red-500 text-sm">Rejected</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" variant="ghost">
                          Make New Offer
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="orders" className="mt-6">
            <Card className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <h2 className="text-lg font-medium">Order History</h2>
              </div>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Items</TableHead>
                      <TableHead>Total Amount</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">#ORD-2023-001</TableCell>
                      <TableCell>Rice Husks (200kg)</TableCell>
                      <TableCell>₹1,000</TableCell>
                      <TableCell>Apr 2, 2025</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Truck className="h-4 w-4 text-blue-500 mr-1" />
                          <span className="text-blue-500 text-sm">Shipping</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">Track</Button>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">#ORD-2023-002</TableCell>
                      <TableCell>Coconut Husk (100kg)</TableCell>
                      <TableCell>₹800</TableCell>
                      <TableCell>Mar 28, 2025</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-1" />
                          <span className="text-green-500 text-sm">Delivered</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">Review</Button>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DealerLayout>
  );
};

export default DealerOrders;
