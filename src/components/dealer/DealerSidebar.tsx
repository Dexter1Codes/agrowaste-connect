
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  ShoppingCart, 
  MessageSquare, 
  Settings,
  Search,
  Truck,
  Star,
  Book
} from "lucide-react";

const navItems = [
  {
    title: "Dashboard",
    href: "/dealer",
    icon: LayoutDashboard,
  },
  {
    title: "Browse Listings",
    href: "/dealer/listings",
    icon: Search,
  },
  {
    title: "Orders & Offers",
    href: "/dealer/orders",
    icon: ShoppingCart,
  },
  {
    title: "Messages",
    href: "/dealer/messages",
    icon: MessageSquare,
  },
  {
    title: "Logistics",
    href: "/dealer/logistics",
    icon: Truck,
  },
  {
    title: "Reviews",
    href: "/dealer/reviews",
    icon: Star,
  },
  {
    title: "Learning Hub",
    href: "/dealer/learning",
    icon: Book,
  },
  {
    title: "Settings",
    href: "/dealer/settings",
    icon: Settings,
  },
];

const DealerSidebar = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4">
        <h2 className="text-xl font-bold text-primary">AgriCycle | Dealer</h2>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center space-x-3 px-3 py-2 rounded-md transition-colors",
                    isActive
                      ? "bg-primary text-white"
                      : "text-gray-600 hover:bg-primary-100"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default DealerSidebar;
