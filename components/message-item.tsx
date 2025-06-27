'use client';

import { Message } from 'ai';
import { cn } from '@/lib/utils';
import { AIAvatar } from './ai-avatar';
import { MessageParts } from './message-parts';
import { SimpleMarkdown } from './simple-markdown';

interface MessageItemProps {
  message: Message;
  onSendMessage?: (message: string) => void;
}

export function MessageItem({ message, onSendMessage }: MessageItemProps) {
  
  const renderAssistantMessage = () => {
    // @ts-ignore
    if (message?.parts && message.parts?.length > 0) {
      // @ts-ignore
      return <MessageParts parts={message.parts} />;
    }

    // If no parts, display the content as text
    return (
      <div className="max-w-none text-foreground">
        <SimpleMarkdown>{message.content as string}</SimpleMarkdown>
      </div>
    );
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
        {message.role === 'user' ? 
          (message.content as string) : 
          renderAssistantMessage()
        }
      </div>
    </div>
  );
}