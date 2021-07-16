import { AuthService } from './../auth.service';
import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  maxDate;
  constructor( private authService: AuthService) { }

  ngOnInit(): void {
      this.maxDate = new Date();
      this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  onSubmit(form: NgForm) {
    console.log(form);
    if (!form.value.agree) {
      document.getElementById('agreed_text').style.color = 'red';
      return false;
    }
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password
    });
  }

  agreedChecked() {
    document.getElementById('agreed_text').style.color = 'black';
  }

}
