import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {

  books:any=[]
 
  constructor(
    private apiService: ApiService,
    private router:Router,
    private route:ActivatedRoute
    ) { }
  data={
    book_title:'',
    author:'',
    publisher:'',
    price:'',
    content:''
    }

  ngOnInit(): void {
   
  }

  onSubmit(){
    this.apiService.addBook(this.data).subscribe(res=>{
      this.books=res
      alert('successfully added');
      this.router.navigate(['/bookview'])
    })
  }  
}
