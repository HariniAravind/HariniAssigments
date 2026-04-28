const { log } = require("node:console");

function named(num)
{
    if(num==0)
    {
        console.log("number is neutral",num)
    }
    else if(num>=0)
    {
        console.log("number is positive",num)
    }
    else if(num<0)
    {
        console.log("number is negative",num)
    }
}
named(-1)