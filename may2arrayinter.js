function intersection(arr1,arr2)
{
    
    let l1=arr1.length
    let l2=arr2.length
    let res=[]
    for(i=0;i<l1+l2;i++)
    {
    
    if(i<l1)
       {
        if(!res.includes(arr1[i]))
        {
        
    res.push(arr1[i])
       }
       
    }
    else
    
        {
          if(!res.includes(arr2[i-l1]))  
          {
            res.push(arr2[i-l1])
          }
        }
    }
   

console.log(res)
}
    
   
intersection([1,2,3,4],[2,5,6,7,10])
