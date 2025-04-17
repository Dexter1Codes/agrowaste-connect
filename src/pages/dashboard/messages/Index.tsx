
import React, { useState } from 'react';
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MessageSquare, Send, User } from "lucide-react";
import { useMessages } from '@/hooks/useMessages';
import { supabase } from '@/integrations/supabase/client';

const Messages = () => {
  const { messages, sendMessage } = useMessages();
  const [newMessage, setNewMessage] = useState('');
  const [selectedDealer, setSelectedDealer] = useState<string | null>(null);

  const [dealers, setDealers] = useState<any[]>([]);

  React.useEffect(() => {
    const fetchDealers = async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('role', 'dealer');

      if (data) setDealers(data);
    };

    fetchDealers();
  }, []);

  const handleSendMessage = async () => {
    if (selectedDealer && newMessage.trim()) {
      await sendMessage(selectedDealer, newMessage);
      setNewMessage('');
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Messages & Support</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 space-y-4">
            <div className="flex items-center space-x-2 text-primary">
              <MessageSquare className="h-5 w-5" />
              <h3 className="font-medium">Chat with Dealers</h3>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Select Dealer</label>
              <select 
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                onChange={(e) => setSelectedDealer(e.target.value)}
              >
                <option value="">Select a dealer</option>
                {dealers.map((dealer) => (
                  <option key={dealer.id} value={dealer.id}>
                    {dealer.full_name || 'Unnamed Dealer'}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-4 space-y-2">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`p-2 rounded ${
                    msg.sender_id === selectedDealer 
                      ? 'bg-gray-100 text-left' 
                      : 'bg-primary text-white text-right'
                  }`}
                >
                  {msg.content}
                </div>
              ))}
            </div>

            <div className="flex space-x-2 mt-4">
              <Input 
                placeholder="Type a message..." 
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                disabled={!selectedDealer}
              />
              <Button 
                onClick={handleSendMessage} 
                disabled={!selectedDealer || !newMessage.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </Card>
          
          <Card className="p-6 space-y-4">
            <div className="flex items-center space-x-2 text-primary">
              <User className="h-5 w-5" />
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
