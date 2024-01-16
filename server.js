const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express()
app.use(cors())

app.use(bodyParser.json());

const PORT = 3002
const dataFile = 'data.json'

const readData = () =>{
    const rawData = fs.readFileSync(dataFile);
    return JSON.parse(rawData);
}

const writeData = (data) => {
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
};

app.get('/', async(req, res) =>{
    const data = readData();
    res.json(data)
})

app.post('/addUser', async(req, res) =>{
    const id = Math.round(Math.random()*999)
    const {fullName, email, password} = req.body;
    const data = readData()
    data.push({
        fullName, email, password, id
    })
    writeData(data);
    res.json(req.body);
})

app.put('/:id', (req, res) =>{
    const data = readData()
    const id = req.params.id
    const updateItems = req.body;
    const index = data.findIndex(item => item.id === parseInt(id));
    console.log(index, id)
    if (index !== -1) {
        data[index] = { ...data[index], ...updateItems };
        writeData(data);
        res.json(data[index]);
      } else {
        res.status(404).json({ error: 'Item not found' });
      }
})

app.delete('/:id', (req, res) => {
    const data = readData();
    const id = req.params.id;
    const index = data.findIndex(item => item.id === parseInt(id));
    if (index !== -1) {
      const deletedItem = data.splice(index, 1)[0];
      writeData(data);
      res.json(readData());
    } else {
      res.status(404).json({ error: 'Item not found' });
    }
  });
  

app.listen(PORT, () =>{
    console.log("Listening on port", PORT)
})