import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import StudentService  from '../student.service';
import  {Router} from '@angular/router';


@Component({
  selector: 'app-studentedit',
  templateUrl: './studentedit.component.html',
  styleUrls: ['./studentedit.component.scss'],
})
export class StudenteditComponent implements OnInit {

  constructor(private router:Router,private route: ActivatedRoute, private studentService:StudentService) { }
  rollno: number;
  private sub: any;
  student:any;
  ngOnInit() {
  	 this.sub = this.route.params.subscribe(params => {
       this.rollno = +params['rollno']; // (+) converts string 'id' to a number
       console.log("rollno is "+this.rollno);
       this.student = this.studentService.getStudentById(this.rollno);

       // In a real app: dispatch action to load the details here.
    });
  }
  update(student){
    this.studentService.updateStudent(student);
    this.router.navigate(['/studentlist']);
  }
}
