import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send('index sayafası olusturdum.');
});

app.listen(port, () => {
  console.log('Application runnig on port: $(port)');
});