import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { formatCurrency } from '@angular/common';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private router:Router,
    private apiService:ApiService) { }

  signupdata:any=[]
  loginForm=new FormGroup({
    emailid:new FormControl(null,[Validators.required,Validators.email]),
    passwords:new FormControl(null,[Validators.required,Validators.minLength(8)])
  })
  
  usersignup={
    name:'',
    email:'',
    phone:'',
    password:''
  }
  database:any

  ngOnInit(): void {

    this.apiService.getlogin().subscribe(res=>{
      this.database=res
      console.log(res)
    })
  }
  signup(){
    this.apiService.addSignup(this.usersignup).subscribe(res=>{
      this.signupdata=res
      console.log(res)
      alert("Registration successful")
      window.location.reload();
    })
  }

  condition:any=''
login(){

  for(var data of this.database){
    if(data.email===this.loginForm.value.emailid && data.password===this.loginForm.value.passwords){
      this.router.navigate(['bookview'])
    }
    else{
      this.condition='invalid username and password'
    }
  }
     
}

}
