import express from "express";
import "dotenv/config";

const app = express();
app.use(express.static("dist"));

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "This is a joke",
    },
    {
      id: 2,
      title: "Another joke",
      content: "This is another joke",
    },
    {
      id: 3,
      title: "Timepass joke",
      content: "This is Timepass joke",
    },
    {
      id: 4,
      title: "Demo joke",
      content: "This is Demo joke",
    },
    {
      id: 5,
      title: "Faltu joke",
      content: "This is faltu joke",
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
