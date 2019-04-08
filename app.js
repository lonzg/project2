var express = require('express'); // put the module you want in the require function
var bodyParser = require('body-parser'); 
var app = express(); // set app to express function then intialize it 
var PORT = process.env.PORT || 3000;
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs') //to request templates
app.use('/assets', express.static('assets')); //any request to assets route is entered it will serve the request if you type in style.css file

app.get('/', function(req, res){ // when a user uses / , the function shall execute
    //res.send('this is the homepage'); // use respond object to send to client a string
   // res.sendFile(__dirname + '/index.html'); // to send a file you want to that route use sendFile. 
    res.render('index');    // change to res.render to use the view engine
});


app.get('/contact', function(req, res){
    //res.send('this is the contact page');
    //res.sendFile(__dirname + '/contact'); 
    //res.render('contact'); //since we are using partial templates in the view engine we must change it to render instead of send.
    res.render('contact', {qs: req.query}); //query data to contact
});

//set up a post for the form in contact.ejs, urlencodeparser will enable you to use .body
app.post('/contact', urlencodedParser, function(req,res){
    console.log(req.body);
    res.render('contact-success', {data: req.body});
});


//route params for dynamic routes, by using ex: :anything_you_want after the semicolor 
app.get('/profile/:name' , function(req,res){
   // res.send('You requested to see a profile with the id of ' + req.params.id); // this will concatenate other routes since you used a param of Id that you assigned to app.get, you can type anything in the url as the ID
    var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
   res.render('profile' , {person: req.params.name, data: data}); // uses the profile file to provide html for the route, the person object will receive the request from the client entering a route with their name
// data is there to show we can add multiple properties to show more data 
// person: and data: are the property we will call in are profile ejs file
});



app.listen(PORT, function(){
    console.log('server listening on port 3000')
}); // give it a port number to use to respond to request

/* http methods are request we make such as get- when we type in a url, post to post data on server or web, delete request, put request

    responding to request:
    get - app.get('route, fn) 

    post- app.post('route', fn)

    delete - app.delete('route', fn)
*/

