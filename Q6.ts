

//Q.6.Create a class Student with  properties enrolmentNumber and studentName.
//Write an arrow function display to display the student details.


class Student 
{
    enrolmentNumber : number;
    studentName : string;

constructor(rollno : number, name: string)
{
this.enrolmentNumber=rollno;
this.studentName=name;
}

 Display =() : any=>
{
console.log(`Student Name :-${this.enrolmentNumber}`);
console.log(`Enrolment Name :-${this.studentName}`);

}
}
let info=new Student(1001,'Amrit');
info.Display();






