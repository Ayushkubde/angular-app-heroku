import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from '../modal/modal.component';
import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  
  public Email = '';
  public Password = '';
  public apiurl = "https://localhost:44340/api/login";
  errorMessage: any;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  public Register() {
    this.router.navigateByUrl("Register");
  }
  public insertData() {
    const body = { Email: this.Email, Password: this.Password };

    this.http.post<any>('https://localhost:44340/api/login', body).subscribe({
      next: data => {
        console.log("data is successfully inserted");
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    })
  }

}


