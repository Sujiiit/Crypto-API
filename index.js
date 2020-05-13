let express,bodyparser,request,app;

express = require('express');  // To include express in web application.
bodyparser = require('body-parser'); // body parser is used to get data from the browser form.
request = require('request'); // To include request module in web application for insert a curl request in browser.
app = express(); // This call the express function so we can use it.
app.use(bodyparser.urlencoded({extended: true})); //It allows the app to use bodyparser and extended: true allows him nesting.



app.listen(3000, function(req,res) 
  {
   console.log('your server is started at port 3000.') //This will print on cmd.
  });

app.get('/',function(req,res)  //This will send the html page to the browser by get request of browser.
{
  res.sendFile(__dirname+"/index.html"); 

});

app.post('/' ,posting) //This will send the response to the browser after getting a request.
 
 function posting(req,res)
  {   let crypto,fiat,amount,wholeurl;

 	  crypto = req.body.crypto;
 	  fiat = req.body.fiat;
 	  amount = req.body.amount;

 	  wholeurl = //This object is passed to the url section with the baseurl 
       {       //and methord along with the keys and value after the quesetion
       	    //mark and keys are seprated by & operator.
 //ex: https://apiv2.bitcoinaverage.com/indices/global/ticker/?from=crypto&to=fiat&amount=2
         url: 'https://apiv2.bitcoinaverage.com/indices/global/ticker/',
         methord: 'post',
         qs:      
           {
             from: crypto,   //but this methord works only with request module.
             to: fiat,
             amount: amount
           }
 	    }

 	request(wholeurl, function(error,response,body) 
 	  {  // now passing the wholeurl object in the url section and getting something.
 		res.write("<h1>The current time is: "+time+"</h1>");
 		res.write("<h1>The price of Bitcoin is "+value+" "+unit+"</h1>" );
 		res.send()
 	 });

 	data = JSON.parse(body);//this converts the json into a simple object so we can easily use it.
 	amount = data.last;
 	currentdate = data.time;
    res.write("<h1>The current date is "+currentdate+"</h1>");
    res.write("<h1>The currency price of "+crypto+" is currently worth " +amount + fiat+ ".</h1>")

  }

 




