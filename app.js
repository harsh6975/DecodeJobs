const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const app =express();

//middleware
app.use(express.static('public'));
app.use(express.json());

//view engine
app.set('view engine','ejs');

//connect to databse
const dbURI = 'mongodb+srv://HarshSinha:Harsh@123@clusterharsh.aw9ex.mongodb.net/ClusterHarsh?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser:true , useUnifiedTopology:true})
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

//routes
app.get('/', (req, res) => {
   res.render('home')
});

app.get('/courses', (req, res) => res.render('courses'));

app.get('/login', (req, res) => res.render('login'))


//use router
app.use(authRoutes);



