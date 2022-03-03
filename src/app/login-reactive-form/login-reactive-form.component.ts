import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthjwtserviceService } from '../inteceptor/authjwtservice.service';




@Component({
  selector: 'app-login-reactive-form',
  templateUrl: './login-reactive-form.component.html',
  styleUrls: ['./login-reactive-form.component.css']
})
export class LoginReactiveFormComponent implements OnInit {


  @ViewChild('fform',{static: false}) feedbackFormDirective;

  
  public value = "1";
  user = {username: '', password: ''}
  feedbackForm: FormGroup;
  successMessage : string = "ok";

  loginOrRegister = "";
  @Input() message : string ;
  errMess: string;






  constructor(public dialogRef: MatDialogRef<LoginReactiveFormComponent> , private fb: FormBuilder, 
    private authservice : AuthService,private http: HttpClient , private authjwt : AuthjwtserviceService
    )


   {
    this.createForm();
   }


   


  ngOnInit() {
    this.loginOrRegister = this.authservice.reTurnameacces();
    this.value = "1";
    alert("open component");
    console.log(this.user);
  }


  createForm() {
    this.feedbackForm = this.fb.group({
      username: ['',Validators.required,Validators.maxLength(1)],
      password: ['',Validators.required],
      roles: ['user',Validators.required],
    });
  }

  // onSubmit() {
  //   console.log(this.feedbackForm.value);
  //   this.userLogin = this.feedbackForm.value;
  //   console.log('User: ', this.userLogin);
  //   //   if (this.feedbackForm.valid) {
  //       this.authservice.registerBackEND(this.userLogin)
  //         .subscribe(
  //           data => this.successMessage = 'Registration Success',
  //           error => this.successMessage = 'SOme error'
  //         );
  //    //  }
  
  //    alert(this.successMessage);
  //   this.dialogRef.close();
  // }


  // Submits a post request to the /users/register route of our Express app
  onRegisterSubmit() {
    const username = this.user.username;
    const password = this.user.password;

    const headers = new HttpHeaders({'Content-type': 'application/json'});

    const reqObject = {
      username: username,
      password: password
    };

    this.http.post('http://localhost:3000/users/register', reqObject, { headers: headers }).subscribe(
      
      // The response data
      (response) => {
        console.log(response);
      },

      // If there is an error
      (error) => {
        console.log(error);
      },
      
      // When observable completes
      () => {
        console.log('done!');
       // this.router.navigate(['login']);
      }

    );
  }

  

  onLoginSubmit() {
    const username = this.user.username;
    const password = this.user.password;

    const headers = new HttpHeaders({'Content-type': 'application/json'});

    const reqObject = {
      username: username,
      password: password
    };

    this.http.post('http://localhost:3000/users/login', reqObject, { headers: headers }).subscribe(
      
      // The response data
      (response) => {
      
        // If the user authenticates successfully, we need to store the JWT returned in localStorage
        this.authjwt.setLocalStorage(response);
      },

      // If there is an error
      (error) => {
        console.log(error);
      },
      
      // When observable completes
      () => {
        console.log('done!');
       // this.router.navigate(['protected']);
      }

    );
  }



  onprotected()
  {
    this.http.get<any>('http://localhost:3000/users/protected').subscribe(
      (response) => {
        if (response) {
          this.message = response.msg;
        }
      },

      (error) => {
        if (error.status === 401) {
          this.message = 'You are not authorized to visit this route.  No data is displayed.';
        }

        console.log(error);
      }, 

      () => {
        console.log('HTTP request done', this.message);
      }
    );

  }




  onSubmit() {
    this.user = this.feedbackForm.value
    if (this.loginOrRegister === "LOGIN")
    {
    console.log('User: ', this.user);
    this.authservice.logIn(this.user)
      .subscribe(res => {
        if (res.success) {
          console.log(res);
         // this.dialogRef.close(window.location.reload());
      this.dialogRef.close( window.location.reload());
        } else {
          console.log(res);
        }
      },
      error => {
        console.log(error);
        this.errMess = error;
      });
  
    }


    if (this.loginOrRegister === "REGISTER")
    {
      console.log('User: ', this.user);
    this.authservice.Register(this.user)
      .subscribe(res => {
        if (res) {
          console.log(res);
          this.dialogRef.close( window.location.reload());
        } else {
          console.log(res);
        }
      },
      error => {
        console.log(error);
        this.errMess = error;
      });
    
    }

    if (this.loginOrRegister === "REGISTER-JWT")
    {
     this.onRegisterSubmit();
    }

    if (this.loginOrRegister === "LOGIN-JWT")
    {
     this.onLoginSubmit();
    }

    if (this.loginOrRegister === "PROTECTED")
    {
      alert("hi");
     this.onprotected();
    }
    


  }






}
