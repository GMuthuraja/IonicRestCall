import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  userList(){
    return this.http.get("https://reqres.in/api/users");
  }

  addNewUser(){
    let payload = {
        "name": "morpheus",
        "job": "leader"
    }
    
    return this.http.post("https://reqres.in/api/users", payload);
  }
}
