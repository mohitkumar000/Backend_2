function todo(task)
{
    setTimeout(function fun(){

        console.log("completed",task);

    },200)
}

console.log("starting task...");
todo("assignments");
console.log("ending")