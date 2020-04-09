/*Q2: Create a sample application in Typescript to find the prime numbers from 1 to 100.*/


export{}
let i : number=0;
let num : number=0;

for (i=0;i<=100;i++)
{
    let count : number=null ;
    for(num =i; num>=1; num--)
    {
           if(i%num==0)
       {
       count = count + 1;
       }
    }
    if (count ==2)
    {
       console.log(i);
    }
}
