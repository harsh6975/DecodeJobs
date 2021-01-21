const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authmiddleware');

const app =express();

//middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

//view engine
app.set('view engine','ejs');

//connect to databse
const dbURI = 'mongodb+srv://HarshSinha:Harsh@123@clusterharsh.aw9ex.mongodb.net/ClusterHarsh?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser:true , useUnifiedTopology:true})
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

//routes
app.get('*',checkUser);
app.get('/', (req, res) => {
   res.render('home')
});

app.get('/courses',requireAuth, (req, res) => res.render('courses'));
app.use(authRoutes);




