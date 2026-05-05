const s="Hello hi"
const s1=s.split(/\s+/)
const lastItem = s1[s1.length - 1];
const l1=lastItem.length
console.log(l1)

const h=" fly me to the moon  "
const h1=h.trim()
const h2=h1.split(/\s+/)
const lastItem1 = h2[h2.length - 1];
const l2=lastItem1.length
console.log(l2)

function isanagram(x, y)
{
let x1=x.split('').sort().join('');
let y1=y.split('').sort().join('');
if(x1===y1){
    console.log("true")
}
else{
     console.log("false")
}
}
isanagram('listen', 'silent')




