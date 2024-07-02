// controllers todo 

const Todo = require("../modules/todo");
// create data
const createTodo = async(req,res)=>{
    // console.log(req.body);
    const todo = new Todo(req.body); 
    const result = await todo.save();
    // console.log(result);

    res.send({status:"success",message:"Todo create successsfully",
        _id:result._id,
    });
}
// get data
const getTodo = async(req,res)=>{
    try{
        const todos = await Todo.find({});
        // const todo = new Todo(req.body);
        // const result = await todo.save();
        res.send({
            status :"success",
            message:"Todo get successfuly",
            data:todos,
        });
        
    }catch(error){
        res.send({
            status:"error",
            message:"todo get failed",
            error,
        });
    }
    
    // res.send("get method called - controller")
};

// update

const updateTodo = async(req,res)=>{
    try{
        // const todos = await Todo.find({});
        const id = req.body._id;
        // recode find
        const todo = await Todo.findById(id);
        //change set
        todo.userName = req.body.userName;
        todo.mobile = req.body.mobile;

        //save
       await todo.save();
        res.send({
            status :"success",
            message:"Todo update successfuly",
            // data:todos,
        });
        
    }catch(error){
        res.send({
            status:"error",
            message:"todo update failed",
            error,
        });
    }
    
    // res.send("update method called - controller")
};

//delete

const deleteTodo = async(req,res)=>{
    try{
        // const todos = await Todo.find({});
        const id = req.body._id;
        // recode find
        const todo = await Todo.findById(id);
        await todo.deleteOne();

    
        res.send({
            status :"success",
            message:"Todo delete successfuly",
            // data:todos,
        });
        
    }catch(error){
        res.send({
            status:"error",
            message:"todo delete failed",
            error,
        });
    }
    
    // res.send("delete method called - controller")
};

module.exports={createTodo, getTodo, updateTodo, deleteTodo};

