import { Component, OnInit } from '@angular/core';
import StudentService  from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.scss'],
})
export class StudentlistComponent implements OnInit {

  constructor(private router:Router,private studentService:StudentService  ) { }

  students:any=[{ rollno: 0, firstName: ' ',lastName:'', birthDate:'',class:'',subject:'',teacher:'',address:'' },
//  { rollno: 12, firstName: 'Mr. Nice',lastName:'kumar', birthDate:'',class:'',subject:'',teacher:'ASDFGHJ',address:'sadf' }
];
  ngOnInit() {
    //  this.studentService.getStudents();
    
  }
   list=this.studentService.getStudents();
//   deleteStudent(student){
//     this.StudentService.deleteStudent(student);
//  }
 editStudent(student){
  this.router.navigate(['/studentedit/'+student.rollno]);
 }
deleteStudent(student){
  this.studentService.deleteStudent(student);
}
}
