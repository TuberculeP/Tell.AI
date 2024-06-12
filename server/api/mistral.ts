import MistralClient from "@mistralai/mistralai";
import { config as dotenvConfig } from "dotenv";

dotenvConfig();
const apiKey = process.env.MISTRAL_API_KEY;
const client = new MistralClient(apiKey);

export default defineEventHandler(async (event) => {
  if (event.method !== "POST") return new Response(null, { status: 405 });
  const { histoire } = await readBody(event);
  if (!histoire) return new Response(null, { status: 400 });

  const chatResponse = await client.chat({
    model: "open-mistral-7b",
    messages: [
      {
        role: "system",
        content:
          "Tu es là pour raconter une histoire basé sur une description. N'hésite pas à proposer beaucoup de rebondissements et de détails pour rendre l'histoire plus intéressante. Tu n'as pas à décrire tout le contexte, garde tout l'univers et le lieu pour créer l'histoire et raconte seulement ce qu'il se passe. Tu as la possibilité de fournir des dialogues. La réponse que tu donne doit être en français et doit absolument etre en HTML pour que ça puisse être mis en forme facilement (des <p></p> pour chaque paragraphe)",
      },
      { role: "user", content: histoire },
    ],
  });

  console.log("Chat:", chatResponse.choices[0].message.content);
  return chatResponse.choices[0].message.content;
});
