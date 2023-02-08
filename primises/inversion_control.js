function fun (inputString, fn)
{
    let output = nputString.split(',');
    for(let i=0;i<output.length;i++)
    {
        fn(output[i]);
    }
}

fun("name:sanket,subject:cse")

//this is the problem that is caused due to callback 
//so we use primise to solve this problem 