import express from "express";
import cors from "cors";

const app = express();
app.use(cors()); // Это то, о чем просят в подсказке 💡Tip
app.use(express.json());

let quotes = [
  { author: "Ibrahim", quote: "Hello" },
  { author: "Yoda", quote: "Do or do not. There is no try." }
];

// 1. Ответ на обычный запрос (проверка работы)
app.get("/", (req, res) => {
  res.send("Quote API is working!");
});

// 2. Получение случайной цитаты (для фронтенда)
app.get("/quote", (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json(randomQuote);
});

// 3. Добавление цитаты через curl (как в упражнении)
app.post("/", (req, res) => {
  const newQuote = req.body;
  quotes.push(newQuote);
  res.status(201).json(newQuote);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on http://127.0.0.1:${PORT}`));