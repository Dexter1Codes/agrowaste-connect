
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, CreditCard, Globe } from "lucide-react";

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
        
        <div className="grid gap-6">
          <Card className="p-6 space-y-4">
            <div className="flex items-center space-x-2 text-primary">
              <User className="h-5 w-5" />
              <h3 className="font-medium">Profile Information</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <Input placeholder="Your full name" className="mt-1" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <Input type="email" placeholder="your@email.com" className="mt-1" />
              </div>
              <Button>Save Changes</Button>
            </div>
          </Card>
          
          <Card className="p-6 space-y-4">
            <div className="flex items-center space-x-2 text-primary">
              <CreditCard className="h-5 w-5" />
              <h3 className="font-medium">Payment Methods</h3>
            </div>
            <p className="text-gray-600">No payment methods added yet.</p>
            <Button variant="outline">Add Payment Method</Button>
          </Card>
          
          <Card className="p-6 space-y-4">
            <div className="flex items-center space-x-2 text-primary">
              <Globe className="h-5 w-5" />
              <h3 className="font-medium">Language Preferences</h3>
            </div>
            <select className="w-full rounded-md border border-input bg-background px-3 py-2">
              <option value="en">English</option>
              <option value="hi">हिंदी (Hindi)</option>
              <option value="pa">ਪੰਜਾਬੀ (Punjabi)</option>
            </select>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
