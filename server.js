import express from 'express';
let server = express();
server.set('views', __dirname + '/pages');
server.set('view engine', 'ejs');
server.use(express.json()); //allows our app to read the json data in a response
server.use(express.static(__dirname + '/public')) //allows us to serve our static assets in public folder in root dir of out project
server.use(express.urlencoded({extended: false})); //allows our app to read form data from a request body

// This is line the home route of our application
server.get('/', (req, res)=>{
    res.send('This is the homepage');
});

server.get('/covid', (req, res)=>{
    res.send('This is the homepage for reading information about covid!');
});

server.get('/covid/new', (req, res)=>{
    res.render('newcovid');
})

server.post('/covid/new', (req, res)=> {
    res.send('This is the route that server use to read your form data!') 
})

// This is a function to our app listen for requests on localhost:9090
server.listen(9090, ()=>{
    console.log(`server running on port 9090!`)
});