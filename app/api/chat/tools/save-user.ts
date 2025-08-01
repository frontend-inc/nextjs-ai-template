import { z } from "zod";
import { tool } from "ai";

export const saveUser = tool({
  description: "Save user name to personalize the conversation",
  inputSchema: z.object({
    name: z.string().describe("The user's name"),
  }),
  execute: async ({ name }) => {
    try {
      
      return {
        success: true,
        message: `User information saved successfully for ${name}`,
        user: {
          name
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