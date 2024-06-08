const { error } = require("console");
const redis = require("redis");

const redisURL = "redis://127.0.0.1:6379";

const client = redis.createClient(redisURL);

client.set("name","rahul");
console.log("data is set now");

client.get("name",(error,value)=>{
    if(error){
        console.log(error);
    }else{
        console.log(value);
    }
});
