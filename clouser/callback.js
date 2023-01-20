function fun(x,fn)
{
    //some logic

    for(let i=0;i<x;i++){
        console.log(i);
    }
    fun();
}

fun(10,function log()
{
    //this is the callback function
    
    console.log("custom logger");
});
