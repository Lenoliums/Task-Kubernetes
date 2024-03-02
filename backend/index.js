const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

let messages = [];

app.get('/', (req, res) => {
    res.json(messages);
});

app.post("/", (req, res) => {
    let newMessage = { "id": messages.length+1, "title": "message №" + (messages.length+1)};
    messages.push(newMessage);
    res.send(newMessage);
});

app.delete("/", (req, res) => {
    const { id } = req.query;
    messages = messages.filter(m => m.id != (id ?? m.id));
    res.send(messages);
});

app.listen(4000, () => {
    console.log('port 4000')
});