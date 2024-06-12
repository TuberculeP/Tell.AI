import MistralClient from "@mistralai/mistralai";
import { config as dotenvConfig } from "dotenv";

dotenvConfig();
const apiKey = process.env.MISTRAL_API_KEY;
const client = new MistralClient(apiKey);

export default defineEventHandler(async (event) => {
  if (event.method !== "POST") return new Response(null, { status: 405 });
  const { message } = await readBody(event);
  if (!message) return new Response(null, { status: 400 });

  const chatResponse = await client.chat({
    model: "open-mistral-7b",
    messages: [{ role: "user", content: message }],
  });

  console.log("Chat:", chatResponse.choices[0].message.content);
  return;
});
