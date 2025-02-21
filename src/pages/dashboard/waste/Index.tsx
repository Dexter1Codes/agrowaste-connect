
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

const WasteDashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Waste Management</h1>
          <Link to="/dashboard/waste/new">
            <Button>
              <Plus className="h-5 w-5 mr-2" />
              Add New Listing
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder for waste listings */}
          <Card className="p-6">
            <p className="text-gray-500">No waste listings yet. Add your first listing!</p>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default WasteDashboard;
