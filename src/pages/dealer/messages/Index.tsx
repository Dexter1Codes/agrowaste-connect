
import { useState } from "react";
import DealerLayout from "@/components/dealer/DealerLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Send, User } from "lucide-react";

const DealerMessages = () => {
  const [activeContact, setActiveContact] = useState("1");

  const contacts = [
    {
      id: "1",
      name: "Ramesh Farms",
      lastMessage: "Yes, the coconut husks are available",
      time: "10:30 AM",
      unread: 2,
    },
    {
      id: "2",
      name: "Green Valley",
      lastMessage: "We can offer a bulk discount",
      time: "Yesterday",
      unread: 0,
    },
    {
      id: "3",
      name: "Pure Organics",
      lastMessage: "The shipping will be arranged tomorrow",
      time: "Apr 5",
      unread: 0,
    },
  ];

  return (
    <DealerLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Messaging Center</h1>
        
        <Card className="p-0 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 h-[600px]">
            {/* Contacts sidebar */}
            <div className="border-r border-gray-200">
              <div className="p-3 border-b border-gray-200">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    placeholder="Search conversations..."
                    className="pl-8"
                  />
                </div>
              </div>
              
              <div className="overflow-y-auto h-[545px]">
                {contacts.map((contact) => (
                  <div 
                    key={contact.id}
                    className={`flex items-start space-x-3 p-3 hover:bg-gray-50 cursor-pointer ${
                      activeContact === contact.id ? "bg-gray-50" : ""
                    }`}
                    onClick={() => setActiveContact(contact.id)}
                  >
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <h3 className="font-medium truncate">{contact.name}</h3>
                        <span className="text-xs text-gray-500">{contact.time}</span>
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <p className="text-sm text-gray-500 truncate">{contact.lastMessage}</p>
                        {contact.unread > 0 && (
                          <span className="flex-shrink-0 inline-block h-5 w-5 rounded-full bg-primary text-white text-xs flex items-center justify-center">
                            {contact.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Chat area */}
            <div className="md:col-span-2 flex flex-col">
              <div className="p-3 border-b border-gray-200 flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">
                    {contacts.find(c => c.id === activeContact)?.name}
                  </h3>
                  <p className="text-xs text-gray-500">Active now</p>
                </div>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm">Hello! I'm interested in your coconut husk listing. Is it still available?</p>
                    <span className="text-xs text-gray-500 mt-1 block">10:15 AM</span>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <div className="bg-primary text-white rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm">Yes, the coconut husks are available. How much would you like to order?</p>
                    <span className="text-xs text-white/70 mt-1 block">10:18 AM</span>
                  </div>
                </div>
                
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm">I'm looking for about 200kg. What's your best price for that quantity?</p>
                    <span className="text-xs text-gray-500 mt-1 block">10:22 AM</span>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <div className="bg-primary text-white rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm">For 200kg, I can offer ₹7.5 per kg. Does that work for you?</p>
                    <span className="text-xs text-white/70 mt-1 block">10:25 AM</span>
                  </div>
                </div>
                
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm">That sounds good. How soon can you ship it?</p>
                    <span className="text-xs text-gray-500 mt-1 block">10:28 AM</span>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <div className="bg-primary text-white rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm">We can ship within 2-3 business days after receiving the payment.</p>
                    <span className="text-xs text-white/70 mt-1 block">10:30 AM</span>
                  </div>
                </div>
              </div>
              
              <div className="p-3 border-t border-gray-200">
                <div className="flex space-x-2">
                  <Input placeholder="Type a message..." className="flex-1" />
                  <Button>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </DealerLayout>
  );
};

export default DealerMessages;
