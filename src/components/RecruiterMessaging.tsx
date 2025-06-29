import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Send, MessageSquare, Clock, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderRole: 'recruiter' | 'student';
  content: string;
  timestamp: string;
  read: boolean;
}

interface RecruiterMessagingProps {
  studentId: string;
  studentName: string;
  onMessageSent?: (message: string) => void;
}

const RecruiterMessaging = ({ studentId, studentName, onMessageSent }: RecruiterMessagingProps) => {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      senderId: 'recruiter-1',
      senderName: 'Sarah Johnson',
      senderRole: 'recruiter',
      content: `Hi ${studentName}! I came across your portfolio and I'm really impressed with your React projects. We have an exciting full-stack developer position at our company that I think would be a great fit for your skills. Would you be interested in learning more?`,
      timestamp: '2024-01-15T10:30:00Z',
      read: true
    },
    {
      id: '2',
      senderId: studentId,
      senderName: studentName,
      senderRole: 'student',
      content: 'Thank you for reaching out! I\'d definitely be interested in learning more about the position. Could you share some details about the role and the tech stack you\'re using?',
      timestamp: '2024-01-15T14:20:00Z',
      read: true
    }
  ]);
  const { toast } = useToast();

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    setIsLoading(true);
    
    // Simulate sending message
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newMessage: Message = {
      id: Date.now().toString(),
      senderId: 'recruiter-1',
      senderName: 'Sarah Johnson',
      senderRole: 'recruiter',
      content: message,
      timestamp: new Date().toISOString(),
      read: false
    };
    
    setMessages(prev => [...prev, newMessage]);
    setMessage('');
    setIsLoading(false);
    
    if (onMessageSent) {
      onMessageSent(message);
    }
    
    toast({
      title: "Message sent!",
      description: "Your message has been sent to the student.",
    });
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const quickMessages = [
    "I'd like to schedule a brief call to discuss opportunities.",
    "Your portfolio caught our attention. Are you open to new opportunities?",
    "We have an exciting position that matches your skills perfectly."
  ];

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-blue-600" />
          Message {studentName}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col space-y-4">
        {/* Message History */}
        <div className="flex-1 space-y-4 max-h-96 overflow-y-auto">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.senderRole === 'recruiter' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] ${msg.senderRole === 'recruiter' ? 'order-2' : 'order-1'}`}>
                <div className="flex items-center gap-2 mb-1">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${msg.senderName}`} />
                    <AvatarFallback className="text-xs">
                      {msg.senderName.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {msg.senderName}
                  </span>
                  <Badge variant={msg.senderRole === 'recruiter' ? 'default' : 'secondary'}>
                    {msg.senderRole}
                  </Badge>
                </div>
                <div
                  className={`p-3 rounded-lg ${
                    msg.senderRole === 'recruiter'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                </div>
                <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                  <Clock className="h-3 w-3" />
                  {formatTimestamp(msg.timestamp)}
                  {msg.read && <CheckCircle className="h-3 w-3 text-green-500" />}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Messages */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Quick messages:</p>
          <div className="flex flex-wrap gap-2">
            {quickMessages.map((quickMsg, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => setMessage(quickMsg)}
                className="text-xs"
              >
                {quickMsg.substring(0, 30)}...
              </Button>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <div className="space-y-2">
          <Textarea
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            className="resize-none"
          />
          <Button
            onClick={handleSendMessage}
            disabled={!message.trim() || isLoading}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
          >
            {isLoading ? (
              <>Sending...</>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecruiterMessaging;