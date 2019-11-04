import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }
  onSubmit(userForm : NgForm){
    localStorage.setItem("username",userForm.value.username);
  }

}