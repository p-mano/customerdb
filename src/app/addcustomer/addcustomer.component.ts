import { Component, OnInit } from '@angular/core';
import CustomerService from '../customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.scss'],
})
export class AddcustomerComponent implements OnInit {
  customer = {};
  constructor(private CustomerService:CustomerService,private router:Router) {


  }
  // addCustomer(customer){
  //     this.CustomerService.addCustomer(customer);
  //     this.CustomerService.addRemoteCustomer(customer)
      
  //   }

  addCustomer(customer){
  	this.CustomerService.addRemoteCustomer(customer).subscribe((e)=>{this.router.navigate(['/listcustomer']);});
  }
    
  ngOnInit() {}

}
