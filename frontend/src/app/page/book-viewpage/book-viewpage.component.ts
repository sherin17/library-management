import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-viewpage',
  templateUrl: './book-viewpage.component.html',
  styleUrls: ['./book-viewpage.component.css']
})
export class BookViewpageComponent implements OnInit {

  constructor(private apiService: ApiService,private router:Router) { }

  books: any = []
  id:any
  ngOnInit() {
    this.getData();
  }

 navigate(){
  this.router.navigate(['/addnew'])
 }


 navigatetoEdit(id:any){
  this.router.navigate([`/editdata/${id}`])
  
 }

  getData() {
    this.apiService.getBookList().subscribe(res => {
      this.books = res
    })
  }

  deleteBook(id:any){
    this.apiService.deleteBook(id).subscribe(res=>{
      this.getData()
    })
  }

}
