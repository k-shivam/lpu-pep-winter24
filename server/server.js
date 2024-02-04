const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express()
app.use(cors())

app.use(bodyParser.json());

const PORT = 3002
const dataFile = 'server/data.json'

const options = {
  expiresIn: '1h', 
  algorithm: 'HS256', 
};


const readData = () =>{
    const rawData = fs.readFileSync(dataFile);
    return JSON.parse(rawData);
}

const postData = () =>{
  const rawData = fs.readFileSync("server/db.json");
  return JSON.parse(rawData);
}

const writeData = (data) => {
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
};

const writePostData = (data) => {
  fs.writeFileSync("server/db.json", JSON.stringify(data, null, 2));
};

app.get('/', async(req, res) =>{
    const data = readData();
    res.json(data)
})

app.get('/posts', async(req, res) =>{
  const data = postData();
  res.json(data)
})

app.post('/posts/create', async(req, res) =>{
  const { authorization } = req.headers;
  const tokenData = jwt.decode(authorization)
  console.log(tokenData)
  const id = Math.round(Math.random()*999)
  const {title, description, userId} = req.body;
  const data = postData()
  let objToInsert = {
    userId:parseInt(userId), postId:id, title, description
  }
  data.push(objToInsert)
  writePostData(data);
  res.json(req.body);
})

app.put('/post/:id', (req, res) =>{
  const data = postData()
  const id = req.params.id
  const updateItems = req.body;
  const index = data.findIndex(item => item.postId === parseInt(id));
  console.log(index, id)
  if (index !== -1) {
      data[index] = { ...data[index], ...updateItems };
      writePostData(data);
      res.json(data[index]);
    } else {
      res.status(404).json({ error: 'Item not found' });
    }
})

app.delete('/post/:id', (req, res) => {
  const data = postData();
  const id = req.params.id;
  const index = data.findIndex(item => item.postId === parseInt(id));
  if (index !== -1) {
    const deletedItem = data.splice(index, 1)[0];
    writePostData(data);
    res.json(postData());
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

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


app.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  console.log(password)
  const data = readData();
  let token;
  let filteredData = data.filter((item) => {
    return item.email === email && item.password === password;
  });

  if (filteredData.length > 0) {
    const payload = {
      userId: filteredData[0].userId,
      email: filteredData[0].email,
    };

    const options = {
      expiresIn: '1h',
      algorithm: 'HS256',
    };

    token = jwt.sign(payload, "HMawerrrrr", options);

    res.json({
      data: filteredData[0],
      token: token,
    });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});


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