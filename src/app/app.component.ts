import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'login';
  loginForm!: FormGroup;

  ngOnInit(){
     this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.email , Validators.required]),
      'password' : new FormControl(null ,[Validators.required])
     })
  }


}
