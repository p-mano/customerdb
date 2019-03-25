import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export default class StudentService {
  students=[{ rollno: 11, firstName: 'Mr. Nice',lastName:'kumar', birthDate:'',class:'1',subject:'english',teacher:'ASDFGHJ',address:'sadf' },
  { rollno: 12, firstName: 'Mr. Nice',lastName:'kumar', birthDate:'',class:'2',subject:'science',teacher:'ASDFGHJ',address:'sadf' },];

  constructor(private router:Router) { }
  getStudents(){
    return this.students;
  }
  
  addStudent(student){
        this.students.push(student);
  }
  deleteStudent(student){
    for(var i=0;i<this.students.length;i++){
      if(this.students[i].rollno == student.rollno){
        this.students.splice(i,1);
      }
    }
  }
  updateStudent(student){
    for(var i=0;i<this.students.length;i++){ 
      if(this.students[i].rollno ==  student.rollno)  {
           this.students[i]=student;
      }
    }
  }
  getStudentById(rollno){
    for(var i=0;i<this.students.length;i++){ 
        if(this.students[i].rollno == rollno){
        return this.students[i];
        break

      }
    }
  }
}
