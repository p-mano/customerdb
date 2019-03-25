import { Component, OnInit } from '@angular/core';
import StudentService  from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentadd',
  templateUrl: './studentadd.component.html',
  styleUrls: ['./studentadd.component.scss'],
})
export class StudentaddComponent implements OnInit {
  student:any={};
  constructor(private router:Router,private studentService:StudentService  ) { }

  ngOnInit() {}
  addStudent(student){
    console.log(student);
   this.studentService.addStudent(student);
   this.router.navigate(['/studentlist']);
  }
}
