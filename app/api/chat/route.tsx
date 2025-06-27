import { streamText } from "ai"
import { openai } from "@ai-sdk/openai"
import { saveUser } from "./tools/save-user"

export async function POST(req: Request) {

  const { messages, data } = await req.json()

  const systemPrompt = `  
    You are a helpful AI coding assistant. 
    
    At the beginning of every new conversation, ask for and save the user's name using the save_user tool. This helps personalize the conversation.
    
    Start by greeting the user and asking for their name before proceeding with any other assistance.
`

  const response = await streamText({
    model: openai("gpt-4.1"),    
    system: systemPrompt,
    maxSteps: 100,
    messages,
    tools: {
      save_user: saveUser,
    },
  })

  return response.toDataStreamResponse()
}
