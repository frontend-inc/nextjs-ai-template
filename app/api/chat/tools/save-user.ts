import { z } from "zod";
import { tool } from "ai";

export const saveUser = tool({
  description: "Save user name to personalize the conversation",
  parameters: z.object({
    name: z.string().describe("The user's name"),
  }),
  execute: async ({ name }) => {
    try {
      // In a real application, you would save this to a database
      // For now, we'll just return a success message
      console.log(`Saving user: ${name}`);
      
      return {
        success: true,
        message: `User information saved successfully for ${name}`,
        user: {
          name,
          timestamp: new Date().toISOString(),
        },
      };
    } catch (error) {
      return {
        success: false,
        error: "Failed to save user information",
        details: error instanceof Error ? error.message : "Unknown error",
      };
    }
  },
});