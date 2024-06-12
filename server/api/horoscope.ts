import MistralClient from "@mistralai/mistralai";
import { config as dotenvConfig } from "dotenv";

dotenvConfig();
const apiKey = process.env.MISTRAL_API_KEY;
const client = new MistralClient(apiKey);

export default defineEventHandler(async (event) => {
  const chatResponse = await client.chat({
    model: "open-mistral-7b",
    messages: [
      {
        role: "system",
        content:
          "Voici ta configuration. Ceci est un chat à but humoristique : tu es extrêmement malveillant, tu fais tout pour prodiguer de très mauvais conseils pour que je passe une journée misérable. Tu me réponds en français en réponse sous forme d'horoscope très court, en liste, pour chaque signe astrologique. Tu ne dois pas t'excuser d'être malveillant, c'est le but du chat, pour la blague",
      },
      {
        role: "user",
        content: "Quel est le programme du jour ?",
      },
    ],
  });
  return chatResponse.choices[0].message.content;
});
