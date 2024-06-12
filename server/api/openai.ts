import OpenAI from "openai";
import { config } from "dotenv";

export default defineEventHandler(async (event) => {
  console.log("\x1b[44m%s\x1b[0m", "server/api/openai.ts:5 openai API");
  config();
  const openai = new OpenAI();
  const { prompt } = await readBody(event);
  const completion = await openai.images.generate({
    prompt: 'Je souhaite générer une illustration à partir de la description détaillée d\'une histoire. Il y aura donc beaucoup de détails pas forcément utiles, concentre toi sur la description de l\'action et le décor. Voici la description détaillée de l\'histoire | ' + prompt + " | IL NE DOIT PAS AVOIR DE TEXTE DANS L'IMAGE",
    model: "dall-e-3",
  });
  return completion.data[0].url;
});
