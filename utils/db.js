const mongoose = require("mongoose");


mongoose.connect(`mongodb://localhost:27017/testBase/`).then(() => {

})
    .catch((e) => {
        console.log(e)
    })

mongoose.connection.on('error', (e) => {
    console.log("CHECK YOUR DATABASE!");
    console.log(e);
});
mongoose.connection.once('open', () => {
    console.log("DB IS STARTED!");
});
