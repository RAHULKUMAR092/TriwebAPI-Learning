// lexical envirnment
var x = 10;
console.log(x);
function fun1()
// block a / scope a
{
    var y = 20;
    console.log(x,y);

    //block b / scope b
    function fun2()
    {
        var z = 30;
        console.log(x, y, z);
        
    }
    fun2();
}
fun1();



