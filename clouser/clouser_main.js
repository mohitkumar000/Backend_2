function todo(task)
{
    setTimeout(function fun(){
        console.log("completed",task);
    },2000)
}

console.log("starting task...");

todo("assignments");

console.log("ending");

//at the time instance when function fun will be called the todo function is over

//then how did the fun is accessing the task vairable

//this happen due to clousers

//when any function remember its lexical scope even when the funtion is executed outside the scope