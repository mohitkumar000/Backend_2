function procress()
{
    console.log("starts");
    setTimeout(function fun(){
        console.log("executes some task")
    },3000)
    for(let i=0;i<100000;i++)
    {
        //some process
    }
    console.log("ends")
}

procress();