'use client';

import { SimpleMarkdown } from './simple-markdown';
import { LoadingDots } from './loading-dots';

interface MessagePartsProps {
  parts: Array<{
    type: string;
    text?: string;
    state?: string;
    input?: unknown;
    output?: unknown;
  }>;
}

export function MessageParts({ parts }: MessagePartsProps) {
  
  const renderToolResult = (part: {
    type: string;
    state?: string;
    input?: unknown;
    output?: unknown;
  }) => {

    const toolName = part.type.startsWith('tool-') ? part.type.substring(5) : part.type;
    
    if (part.state === 'input-available') {
      return (
        <div className="flex items-center gap-2 text-muted-foreground">
          <LoadingDots />
          <span>Calling {toolName}...</span>
        </div>
      );
    }

    if (part.state === 'output-available' && part.output) {
      switch (toolName) {
        case 'save_user':
          return (
            <div className="max-w-none">
              {part.output.message || 'User information saved successfully'}
            </div>
          );
        default:
          return (
            <div className="max-w-none">
              <pre className="text-sm bg-muted p-2 rounded">
                {JSON.stringify(part.output, null, 2)}
              </pre>
            </div>
          );
      }
    }

    return null;
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
        
        if (part.type.startsWith('tool-')) {
          return (
            <div key={index}>
              {renderToolResult(part)}
            </div>
          );
        }
        
        return null;
      })}
    </div>
  );
}