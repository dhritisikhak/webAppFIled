import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Filed Demo';
  router: string;

  constructor(public _router: Router, private router1: Router,private toastr: ToastrService){
          this.router = _router.url; 
    }

    ngOnInit(): void {
    }

    onSubmit() {  
      this.router1.navigate(['/getDemo'])  
    }  

}
