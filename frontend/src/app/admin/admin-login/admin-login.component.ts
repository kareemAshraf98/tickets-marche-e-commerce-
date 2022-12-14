import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private admin: ProjectService) { }

  ngOnInit(): void {
  }
  adminLogin = new FormGroup({
    Email : new FormControl('',Validators.email),
    Password : new FormControl('',Validators.minLength(8)),
  })

  get AdminEmailValid(){
    return this.adminLogin.controls.Email.valid;
  }

  get AdminPassValid(){
    return this.adminLogin.controls.Password.valid;
  }

  adminLog(){
    // console.log(this.adminLogin);
    this.admin.checkAdmin(this.adminLogin.value).subscribe();
  }

}
