import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl:String = 'http://localhost:3000/api'
  //string_address:string='api'

  constructor(private http :HttpClient) { }

  //to fetch all data list
getBookList(){
  return this.http.get(`${this.apiUrl}/booklist`)
}

// to fetch data of a single book
getBookById(id:any){
  return this.http.get(`${this.apiUrl}/booklist/${id}`)
}


// to delete book
deleteBook(id:any){
  return this.http.delete(`${this.apiUrl}/booklist/${id}`)
}

// to add new book 

addBook(data:any){
  return this.http.post(`${this.apiUrl}/book`, data)

}


// to update existing book
updateBook(data:any){
  return this.http.put(`${this.apiUrl}/booklist`,data)

}

//to add signupdata
addSignup(data:any){
  return this.http.post(`${this.apiUrl}/signup`,data)
}
//to get signup data
getlogin(){
  return this.http.get(`${this.apiUrl}/signuplist`)
}
}
