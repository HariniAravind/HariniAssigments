function userProfile(name)
{
    console.log("hello"+' ' +name)
}
userProfile("Aravind")


let double= (a)=>a*a
console.log(double(2))


setTimeout(function() {
    console.log('"This message is delayed by 2 seconds"');
}, 2000);


function getUserData(x) {

   setTimeout (x, 2000);
}
function callbackfunc()
{
 console.log('“Call Back Function”');   
}

getUserData(callbackfunc)
