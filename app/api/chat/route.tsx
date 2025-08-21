import { convertToModelMessages, streamText } from "ai"
import { openai } from "@ai-sdk/openai"
import { saveUser } from "./tools/save-user"

export async function POST(req: Request) {

  const { messages } = await req.json()

  const systemPrompt = `You are a helpful AI assistant.`

  const chatMessages = [{ 
      role: "system", 
      parts: [{ type: "text", text: systemPrompt }]
    },
    ...messages
  ]

  const response = await streamText({
    model: openai("gpt-4.1"),    
    messages: convertToModelMessages(chatMessages),
    tools: {
      save_user: saveUser,
    },
  })

  return response.toUIMessageStreamResponse({
    sendReasoning: true,
  })
}
