import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AIAvatar } from "@/components/ai-avatar";

// Suggestion array with key-value pairs
const suggestions = [
  { key: "How do I refactor this code?", value: "How do I refactor this code to make it more maintainable?" },
  { key: "Debug this error", value: "Can you help me debug this error message?" },
  { key: "Write unit tests", value: "How can I write unit tests for this function?" },
  { key: "Optimize performance", value: "What are ways to optimize the performance of this code?" },
];

interface WelcomeCardProps {
  setInput?: (text: string) => void;
}

export default function WelcomeCard({ setInput }: WelcomeCardProps) {
  // Function to handle suggestion click
  const handleSuggestionClick = (value: string) => {
    if (setInput) {
      setInput(value);
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <Card className="border-0">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <AIAvatar />
          </div>
          <CardTitle className="font-bold text-3xl text-center text-foreground">How can I help you today?</CardTitle>
          <CardDescription className='text-center'>I'm your AI coding assistant. Ask me anything about programming, debugging, or software development.</CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground/90 leading-normal">         
          {/* Suggestion buttons */}
          <div className="flex flex-wrap gap-2 mt-4">
            {suggestions.map((suggestion, index) => (
              <Button 
                key={index} 
                variant="outline" 
                className="text-sm w-full md:w-auto" 
                onClick={() => handleSuggestionClick(suggestion.value)}
              >
                {suggestion.key}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
