const app = require('express')();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.get('/:name?', (req, res) => { 
	// For GET Request 
	console.log(req.query); 
	// For Paramaterized Request 
	//console.log(req.params.name);
	// For POST Request 
	// console.log(req.body);
	res.send("response");
})

app.listen(3000, () => {
 console.log(`server connected`) 
})