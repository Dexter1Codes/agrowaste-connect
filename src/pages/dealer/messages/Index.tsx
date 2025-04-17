
import React, { useState } from 'react';
import DealerLayout from "@/components/dealer/DealerLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Send, User } from "lucide-react";
import { useMessages } from '@/hooks/useMessages';
import { supabase } from '@/integrations/supabase/client';

const DealerMessages = () => {
  const { messages, sendMessage } = useMessages();
  const [newMessage, setNewMessage] = useState('');
  const [selectedFarmer, setSelectedFarmer] = useState<string | null>(null);

  const [farmers, setFarmers] = useState<any[]>([]);

  React.useEffect(() => {
    const fetchFarmers = async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('role', 'farmer');

      if (data) setFarmers(data);
    };

    fetchFarmers();
  }, []);

  const handleSendMessage = async () => {
    if (selectedFarmer && newMessage.trim()) {
      await sendMessage(selectedFarmer, newMessage);
      setNewMessage('');
    }
  };

  return (
    <DealerLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Messaging Center</h1>
        
        <Card className="p-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Select Farmer</label>
            <select 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              onChange={(e) => setSelectedFarmer(e.target.value)}
            >
              <option value="">Select a farmer</option>
              {farmers.map((farmer) => (
                <option key={farmer.id} value={farmer.id}>
                  {farmer.full_name || 'Unnamed Farmer'}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-4 space-y-2">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`p-2 rounded ${
                  msg.sender_id === selectedFarmer 
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
              disabled={!selectedFarmer}
            />
            <Button 
              onClick={handleSendMessage} 
              disabled={!selectedFarmer || !newMessage.trim()}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      </div>
    </DealerLayout>
  );
};

export default DealerMessages;
