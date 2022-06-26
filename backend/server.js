const Koa = require('koa');
const bodyparser = require("koa-bodyparser");
const cors = require('@koa/cors');

const PORT = 3000;

const app = new Koa();

//routes
const Loginroutes = require('./routes/LoginRoutes');

app.use(cors());

app.use(bodyparser());




//use routes

app.use(Loginroutes.routes());
app.use(Loginroutes.allowedMethods());


app.use(ctx=>{
    ctx.body ="server is running ";
});

app.listen(PORT);
console.log(`application running on port ${PORT}`);

