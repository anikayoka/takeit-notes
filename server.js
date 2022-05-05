const express = require('express');
const PORT = process.env/PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));


app.use(require('./route/routeapi'));
app.use(require('./route/routehtml'));






app.listen(PORT, () => {
  console.log('App listening on PORT.....,',PORT)
})
