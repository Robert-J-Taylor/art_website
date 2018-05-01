const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const cors = require('cors');
const passport =require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
//const MongoStore = require('connect-mongo')(session);
//const paypal = require('paypal-rest-sdk');

/*
paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'AaU8tQfmz1_MFDTKuf84yYERXvdDt2ZFJVrxhNW_49DazF4A_F0VBuKyV5_nntyEdZqUa5Oq9ZBj65GV',
    'client_secret': 'EAZ8aFDU4lHHLy1bQqULYWqznf3dBknXZW3AH__zFC0bUs8AGUyR6RNbm-jHvqtikX7PsSqMO5vxuvKm'
  });
*/

  mongoose.connect(config.database);

  mongoose.connection.on('connected', () => {
      console.log('Connected to database ' + config.database);
  });
  
  mongoose.connection.on('error', (err) => {
      console.log('Database error: ' + err);
  });
const app = express();

const users =require('./routes/users');
const products = require('./routes/products')
//Port Number//
const port = 3000;

//CORS Middleware//
app.use(cors());

//Set Static Folder

app.use(express.static(path.join(__dirname, 'angular-src')));

//Body Parser Middleware//
app.use(bodyParser.json());

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

/*app.use(session({
    secret: 'mysupersecret', 
    resave: false, 
    saveUninitialized: false,
    store: new MongoStore({mongooseConnection: mongoose.connection}),
    cookie: {maxAge:180*60*1000}
}));*/

app.use('/users', users);
app.use('/products',products);


  
/*
app.post('/pays', (req, res) => {
    const create_payment_json = {
      "intent": "sale",
      "payer": {
          "payment_method": "paypal"
      },
      "redirect_urls": {
          "return_url": "http://localhost:3000/success",
          "cancel_url": "http://localhost:3000/cancel"
      },
      "transactions": [{
          "item_list": {
              "items": [{
                  "name": "Red Sox Hat",
                  "sku": "001",
                  "price": "25.00",
                  "currency": "USD",
                  "quantity": 1
              }]
          },
          "amount": {
              "currency": "USD",
              "total": "25.00"
          },
          "description": "Hat for the best team ever"
      }]
  };
  
  paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
        throw error;
    } else {
        for(let i = 0;i < payment.links.length;i++){
          if(payment.links[i].rel === 'approval_url'){
            res.redirect(payment.links[i].href);
          }
        }
    }
  });
  
  });
  
  app.get('/success', (req, res) => {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;
  
    const execute_payment_json = {
      "payer_id": payerId,
      "transactions": [{
          "amount": {
              "currency": "USD",
              "total": "25.00"
          }
      }]
    };
  
    paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
      if (error) {
          console.log(error.response);
          throw error;
      } else {
          console.log(JSON.stringify(payment));
          res.send('Success');
      }
  });
  });
  
  app.get('/cancel', (req, res) => res.send('Cancelled'));
*/
  //Index Route//
app.get('/', (req,res) =>{
    res.send('Invalid Endpoint');
});
/*
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'angular-src/index.html'));
  });*/
app.listen(port, ()=> {
    console.log('Server started on port' + port);
});
