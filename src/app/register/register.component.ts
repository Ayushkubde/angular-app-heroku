import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
};
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  Roles: any = ['Admin', 'Author', 'Reader'];
  errorMessage: any;

  constructor(private http: HttpClient) { }

  public firstname = '';
  public lastname = '';
  public Address = '';
  public email = '';
  public password = '';

  public apiurl = "https://localhost:44340/api/Register";

  ngOnInit() {
    this.Register();
  }

  public Register() {
    const body = { firstname: this.firstname, lastname: this.lastname, Address: this.Address, email: this.email, password: this.password };
    //const data=JSON.parse('{body}').Tostring();
   // var b = JSON.parse(JSON.stringify(body));
   return this.http.post<any>(this.apiurl, body,httpOptions).subscribe((response: Response) => {
        console.log("data is successfully insered",response);
      })
      // error: error => {
      //   this.errorMessage = error.message;
      //   console.error('There was an error!');
      // }
  
    }

  }
