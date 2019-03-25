import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import CustomerService from '../customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.scss'],
})
export class EditcustomerComponent implements OnInit {

  constructor(private router:Router,private route: ActivatedRoute, private customerService:CustomerService) { }
  id: number;
  private sub: any;
  customer:any;
//   ngOnInit() {
//   	 this.sub = this.route.params.subscribe(params => {
//        this.id = +params['id']; // (+) converts string 'id' to a number
//        console.log("id is "+this.id);
//        this.customer = this.customerService.getCustomerById(this.id);

//        // In a real app: dispatch action to load the details here.
//     });
  

// }
// update(customer){
//   this.customerService.updateCustomer(customer);
// }
ngOnInit() {
  this.customer = {name:'', email:'', address:'', phone:''};
   this.sub = this.route.params.subscribe(params => {
     this.id = +params['id']; // (+) converts string 'id' to a number
     this.customerService.getRemoteCustomerById(this.id).subscribe((customer)=>{this.customer = customer;});
  });
}

update(){
  this.customerService.updateRemoteCustomer(this.customer).subscribe((e)=>{this.router.navigate(['/listcustomer']);});
}

}
