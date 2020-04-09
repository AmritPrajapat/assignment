//Q.6.Create a class Student with  properties enrolmentNumber and studentName.
//Write an arrow function display to display the student details.
var Student = /** @class */ (function () {
    function Student(rollno, name) {
        var _this = this;
        this.Display = function () {
            console.log("Student Name :-" + _this.enrolmentNumber);
            console.log("Enrolment Name :-" + _this.studentName);
        };
        this.enrolmentNumber = rollno;
        this.studentName = name;
    }
    return Student;
}());
var info = new Student(1001, 'Amrit');
info.Display();
