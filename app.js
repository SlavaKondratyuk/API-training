require("./utils/db.js")
const app = require("express")();
const sportsmenRoute = require("./routes/sportsmen");
//парсер, чтобы преобразовывать приходящие пакеты в читабельные даные
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.post("/sportsmen/", (req, res) => {  // обычный роут без вынесения в отдельный компонент
//     res.json({
//         status: 200,
//         data: ["Get ur shit togather!"]
//     })
// })

//подключенный роут из другого компонента(routes/sportsmen)
app.use("/sportsmen/", sportsmenRoute);

//перехватываем ошибки. Каждый раз когда возникнет ошибка, отловим её здесь
app.use((err, req, res, next) =>{
    res.json({
        status: err.status,
        data: null,
        errors: [err.message]
    })
    console.log(err.message);
    debugger;
})


app.listen(9999, () => {
    console.log("mY SERVER IS REALLY COOL, BRAH!!");
});