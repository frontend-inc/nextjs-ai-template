'use client';

import { UIMessage } from 'ai';
import { cn } from '@/lib/utils';
import { AIAvatar } from './ai-avatar';
import { MessageParts } from './message-parts';

interface MessageItemProps {
  message: UIMessage;
}

export function MessageItem({ message }: MessageItemProps) {
  
  const renderMessageContent = () => {
    console.log(message);
    if (message?.parts && message.parts?.length > 0) {
      if (message.role === 'assistant') {
        return <MessageParts parts={message.parts} />;
      } else {
        // For user messages, extract text from parts
        const textParts = message.parts.filter((part: { type: string }) => part.type === 'text');
        if (textParts.length > 0) {
          return textParts.map((part: { text: string }) => part.text).join('');
        }
      }
    }

    return null;
  };
  return (
    <div className={cn(
      "whitespace-pre-wrap flex mb-5 w-full",
      message.role === 'user' ? 'justify-end' : 'justify-start'
    )}>
      {message.role === 'assistant' && (
        <div className="mr-3 flex-shrink-0">
          <AIAvatar size="sm" className="mx-0" />
        </div>
      )}
      <div className={cn(
        "p-3 rounded-lg max-w-[80%]",
        message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground',        
      )}>
        {renderMessageContent()}
      </div>
    </div>
  );
}