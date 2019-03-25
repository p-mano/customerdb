import { Component, OnInit } from '@angular/core';
import CustomerService from '../customer.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-listcustomer',
  templateUrl: './listcustomer.component.html',
  styleUrls: ['./listcustomer.component.scss'],
})
export class ListcustomerComponent implements OnInit {
  
  constructor(private router: Router,private customerService:CustomerService) {}

  ngOnInit() {
    this.customerService.getDBCustomers();
    this.customerService.getRemoteCustomers().subscribe((result) => {this.list = result;});
  }
  list=this.customerService.getCustomers();
  // deleteCustomer(customer){
  //   this.customerService.deleteCustomer(customer);
   
  // }
  editCustomer(customer){
    this.router.navigate(['/editcustomer/'+customer.id]);
  }
  deleteCustomer(customer){
    this.customerService.deleteRemoteCustomer(customer).subscribe((e) => {
      this.customerService.getRemoteCustomers().subscribe((result) => {this.list = result;});
    });
   // this.list = this.customerService.getCustomers();
  }
}
