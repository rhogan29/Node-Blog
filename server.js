//importing
const express = require('express');

//server run
const server = express();

//databases
const postDb = require('./data/helpers/postDb');
const tagDb = require('./data/helpers/tagDb');
const userDb = require('./data/helpers/userDb');

// middleware
server.use(express.json());

//get method initial
server.get('/', (req, res) => {
    console.log('Running');
    res.send('Running now!');
})

//get -- user
server.get('/api/users', (req, res) => {
    userDb
    .get()
    .then(response => {
        res.status(200).json({ response })
    })
    .catch(err => {
        res.status(500).json({ Error: err })
    })
})

//get -- post
server.get('/api/posts', (req, res) => {
    postDb
    .get()
    .then(response => {
        res.status(200).json({ response })
    })
    .catch(err => {
        res.status(500).json({ Error: err })
    })
})

//get -- tag 
server.get('/api/tags', (req, res) => {
    tagDb
    .get()
    .then(response => {
        res.status(200).json({ response })
    })
    .catch(err => {
        res.status(500).json({ Error: err })
    })
})

//post -- users 
server.post('/api/users', (req, res) => {
    const userInfo = req.body;
    console.log(userInfo);
    userDb
    .insert(userInfo)
    .then(response => {
        res.status(201).json({ userInfo })
    })
    .catch(err => {
        res.status(500).json({ Error: err })
    })
})

//post -- posts 
server.post('/api/posts', (req, res) => {
    const postInfo = req.body;
    console.log(postInfo);
    postDb
    .insert(postInfo)
    .then(response => {
        res.status(201).json({ postInfo })
    })
    .catch(err => {
        res.status(500).json({ Error: err })
    })
})

//post -- tag 
server.post('/api/tags', (req, res) => {
    const tagInfo = req.body;
    console.log(tagInfo);
    tagDb
    .insert(tagInfo)
    .then(response => {
        res.status(201).json({ response })
    })
    .catch(err => {
        res.status(500).json({ Error: err })
    })
})



//server attached to a port
const port = 5000;
server.listen(port, () => {console.log('== Server is listening on port 5000 ==')});