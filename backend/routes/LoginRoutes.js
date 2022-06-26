const Router = require('koa-router');
const {CreateUser,getoneuser,getusers,LoginUsers} = require('../api/LoginApi');

//prefix
const router = new Router({
    prefix:"/users"
})


router.post("/register" , async(ctx)=>{

    let data = ctx.request.body;
    var user =await CreateUser(data);

    ctx.response.status=200;
    ctx.body = user;

})



router.get("/getAllUsers" , async(ctx)=>{
    ctx.body = await getusers();

})



router.post("/login" , async(ctx)=>{

    let data = ctx.request.body;
    let logged = await LoginUsers(data);
    ctx.response.status=200;
    ctx.body = logged;
})


router.get("/:id" ,async(ctx)=>{

    const id = ctx.params.id;
    var data = await getoneuser(id);

    ctx.response.status=200;
    ctx.body=data;
})


module.exports = router;