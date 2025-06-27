'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface AIAvatarProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function AIAvatar({ size = 'lg', className }: AIAvatarProps) {
  const sizeClasses = {
    sm: 'h-10 w-10',
    md: 'h-16 w-16', 
    lg: 'h-20 w-20'
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-lg',
    lg: 'text-2xl'
  };

  return (
    <Avatar className={cn("mx-auto", sizeClasses[size], size === 'lg' && 'mb-2', className)}>
      <AvatarFallback className={cn("bg-primary text-primary-foreground font-bold", textSizeClasses[size])}>AI</AvatarFallback>
    </Avatar>
  );
}