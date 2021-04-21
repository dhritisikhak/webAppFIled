import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {Payments} from "../../service/payment.service"
import { map } from "rxjs/operators";

@Component({
  selector: 'app-get-demo-form',
  templateUrl: './get-demo-form.component.html',
  styleUrls: ['./get-demo-form.component.css']
})
export class GetDemoFormComponent implements OnInit {

  customerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    budget: new FormControl('',  Validators.required),
    phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)])
  });
  constructor(private fb: FormBuilder,
    private paymentService: Payments) { }

    ngOnInit(): void {
      
      // console.log(window.location.href)
      // throw new Error('Method not implemented.');
    }
  onSubmitForm() {
    // TODO: Use EventEmitter with form value
    console.log(this.customerForm.value);
    this.customerForm = this.fb.group({
      amount: [] = this.customerForm.value.budget.toString(),
      purpose: [] = "demo",
      email: [] = this.customerForm.value.email,
      mobile: [] = this.customerForm.value.phone.toString(),
      name: [] = this.customerForm.value.firstName
    });
    this.paymentService
      .makePayment(this.customerForm.value)
      .pipe(map((res: any) => res.res.payment_request))
      .subscribe(
        res => {
          
          console.log("Payment Successful")
          const { longurl } = res;
          location.replace(longurl);
          // console.log(res)
          // console.log("customer is", customer)
          // this.store.dispatch(addCustomer(customer));
          
        },
        err => console.log(err)
      );
  }

}
