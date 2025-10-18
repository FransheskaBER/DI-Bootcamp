import express from "express";                       
import path from "path";                             
import { fileURLToPath } from "url";                  

const app = express();                               
const PORT = 5000;                                    
app.use(express.json());               

// ----- serve index.html and script.js from this folder -----
const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);           
app.use(express.static(__dirname));                   

const emojis = [
  { id: 1, emoji: "😀", name: "grinning face" },                     
  { id: 2, emoji: "😂", name: "face with tears of joy" },            
  { id: 3, emoji: "😍", name: "smiling face with heart-eyes" },
  { id: 4, emoji: "🤔", name: "thinking face" },
  { id: 5, emoji: "😎", name: "smiling face with sunglasses" },
  { id: 6, emoji: "🥳", name: "partying face" },
  { id: 7, emoji: "😴", name: "sleeping face" },
  { id: 8, emoji: "😡", name: "angry face" },
  { id: 9, emoji: "😢", name: "crying face" },
  { id: 10, emoji: "❤️", name: "red heart" }
];

const objs = [];

for (const item of emojis){
  const pool = emojis.filter(e => e.id !== item.id);
  const distractors = [...pool].sort(() => Math.random() - 0.5).slice(0, 3);
  const options = [...distractors.map(e => e.name), item.name].sort(() => Math.random() - 0.5);
  const answerIndex = options.indexOf(item.name);
  
  objs.push({
    id: item.id,
    emoji: item.emoji,
    options,
    answerIndex
  });
}

app.get("/api/emojis", (req, res) => {
  const publicEmojis = objs.map(({ id, emoji, options }) => ({ id, emoji, options }));
  return res.status(200).json(publicEmojis);
});

app.post("/api/answer", (req, res) => {
  const { emojiId, choiceIndex } = req.body;
  if (typeof emojiId !== "number" || typeof choiceIndex !== "number") return res.status(400).json({ error: "Emoji and choiceIndex must be numbers" });
  
  const emojiObj = objs.find(obj => obj.id === emojiId);

  if (!emojiId) return res.status(404).json({ error: "Emoji Not Found" });

  const correct = emojiObj.answerIndex === choiceIndex;
  return res.status(200).json({ correct });
});


app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));



