//jshint esversion:6

const express = require('express')

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));

const blogs = require('./routes/blogs.js')
const resume = require('./routes/resume.js')

app.use('/blogs', blogs);
app.use('/resume', resume);

// app.use('/query/:connect', (req, res)=>{
//   res.render('index')
// })

app.get('/', (req, res) => {
  console.log(req.parmas);
  res.render('index')
})

app.get('/blogs', (req, res) => {
  res.render('blogs')
})

app.get('/resume' , (req, res) => {
  res.render('resume')
})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen('3000', () => {
  console.log('Listening to Port 3000')
})
