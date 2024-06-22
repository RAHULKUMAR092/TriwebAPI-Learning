

module.exports.app =(req,res)=>{
    let n1 =3
    let n2 =4
    let sum = n1+n2;
    res.send("sum = "+sum);
};

module.exports.add =(req,res)=>{
    let n1 = req.body.num1;
    let n2 = req.body.num2;
    let sum = n1+n2;
    res.send(`sum = ${sum}`);
    

};

module.exports.prod =(req,res)=>{
    let n1 = req.body.num1;
    let n2 = req.body.num2;
    let prod = n1 * n2;
    res.send(`prod = ${prod}`);
    

};
module.exports.app =(req,res)=>{
    let n1 = req.body.num1;
    let n2 = req.body.num2;
    let sub = n1-n2;
    res.send(`sub = ${sub}`);
    

};
