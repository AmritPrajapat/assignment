


//Q3: Create a simple Calculator using TypeScript.Implement Add,Multiply,Subtract and Division operation on two numbers.


class Calculator
{
    a: number;
    b : number;

    addition= (a : number,b?: number) : number=>  
    {
        return a+b;
    }

    subtraction =(a,b) : number =>
    {
        return a-b;
    }

multification =(a,b) : number=>
{
    return a*b;
}

Division =(a,b) : number=>
{
    return a/b;
}

}


var val=new Calculator();
console.log(val.Division(10,20));
console.log(val.addition(10,20));
console.log(val.multification(10,20));
console.log(val.subtraction(10,20));


