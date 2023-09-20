const app = require('./app')
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//setting up config files
dotenv.config({ path: 'backend/config/config.env' })


//Connecting to Database
mongoose.connect("mongodb+srv://marylldriz:Chikit%400016@b-297.ynrfqyy.mongodb.net/inventoryDB?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

let inventoryDB = mongoose.connection;
inventoryDB.on('error', console.error.bind(console, "connection error"));
inventoryDB.on('open', () => console.log("connected to mongoDB Atlas"))

app.listen(process.env.PORT, () => {
        console.log(`Server started on PORT ${process.env.PORT} in ${process.env.NODE_ENV} mode`)
})