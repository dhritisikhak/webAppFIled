import { Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-get-demo-page',
  templateUrl: './get-demo-page.component.html',
  styleUrls: ['./get-demo-page.component.css']
})
export class GetDemoPageComponent implements OnInit {

  div1:boolean=true;
  div2:boolean=false;
  toastDiv: boolean= false;

  getDemoFormYesNo = new FormGroup({
    yesNo: new FormControl('', Validators.required),
    budget: new FormControl('',  Validators.required),
  });

  constructor( private fb: FormBuilder,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    console.log("homepage")
      const queryString = window.location.search;
      console.log(queryString);
      const urlParams = new URLSearchParams(queryString);
      const payment_status = urlParams.get('payment_status')
      console.log(payment_status);
      if(payment_status === "Credit"){
        console.log("success")
        this.launch_toast()
        // this.showSuccess();
        // console.log("customer is", this.customerForm.value)
        // this.store.dispatch(addCustomer(this.customerForm));
      }
      else if(payment_status === "Failed"){
        console.log("failed");
        // this.showError()
      }  
    }

  //   ngAfterViewInit() {
  //     console.log(this.myDiv.nativeElement.innerHTML);
  // }

    launch_toast(){
      this.toastDiv=true;
      setTimeout(() => {
        this.toastDiv = false;
      }, 4000);
      // setTimeout({
      //   this.div1=true;
      // })
      // var x = HTMLAudioElement.doc.getElementById("toast")
      // x.className = "show";
      // setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
    }
  
onSubmit() {
  // TODO: Use EventEmitter with form value
  console.log(this.getDemoFormYesNo.value);
  if(this.getDemoFormYesNo.value.yesNo === "yes"){
    this.div1=false;
    this.div2=true;
  }
  else{
    this.div1=true;
    this.div2=false;
  }
}

}
