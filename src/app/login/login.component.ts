import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin = {username: '', password: '', remember: false};

  constructor(public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit() {
    alert("open component");
    console.log(this.userLogin);
  }


  onSubmit() {
    console.log('User: ', this.userLogin);
   this.dialogRef.close();
  }

}
