import { Component, OnInit } from '@angular/core';
import { LoginForm } from '../../../model/login/loginform.model'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user:LoginForm;

  constructor() { }

  ngOnInit(): void {
  }

}
