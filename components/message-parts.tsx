'use client';

import { SimpleMarkdown } from './simple-markdown';
import { LoadingDots } from './loading-dots';

interface MessagePartsProps {
  parts: Array<{
    type: string;
    text?: string;
    toolInvocation?: {
      state: string;
      toolName: string;
      result?: {
        message?: string;
      };
    };
  }>;
}

export function MessageParts({ parts }: MessagePartsProps) {
  const renderToolInvocation = (toolInvocation: {
    state: string;
    toolName: string;
    result?: {
      message?: string;
    };
  }) => {
    if (toolInvocation.state !== 'result') {
      return (
        <div className="flex items-center gap-2 text-muted-foreground">
          <LoadingDots />
          <span>Calling {toolInvocation.toolName}...</span>
        </div>
      );
    }

    switch (toolInvocation.toolName) {
      case 'save_user':
        return (
          <div className="max-w-none">
            {toolInvocation.result.message || 'User information saved successfully'}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-2">
      {parts.map((part, index) => {
        if (part.type === 'text') {
          return (
            <div key={index} className="max-w-none text-foreground">
              <SimpleMarkdown>{part.text}</SimpleMarkdown>
            </div>
          );
        }
        
        if (part.type === 'tool-invocation') {
          return (
            <div key={index}>
              {renderToolInvocation(part.toolInvocation)}
            </div>
          );
        }
        
        return null;
      })}
    </div>
  );
}