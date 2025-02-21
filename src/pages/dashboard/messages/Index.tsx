
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card } from "@/components/ui/card";
import { MessageSquare, Headset } from "lucide-react";

const Messages = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Messages & Support</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 space-y-4">
            <div className="flex items-center space-x-2 text-primary">
              <MessageSquare className="h-5 w-5" />
              <h3 className="font-medium">Chat with Buyers</h3>
            </div>
            <p className="text-gray-600">No active conversations.</p>
          </Card>
          
          <Card className="p-6 space-y-4">
            <div className="flex items-center space-x-2 text-primary">
              <Headset className="h-5 w-5" />
              <h3 className="font-medium">Support & Help Desk</h3>
            </div>
            <p className="text-gray-600">Need help? Our support team is here for you.</p>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Messages;
