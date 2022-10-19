import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenerateTfService {


  constructor(public http:HttpClient) { }
  getinfastructure():Observable<any>{
    return this.http.get('http://localhost:3000/api/users')
  }
  downloadTf():Observable<any>{
    return this.http.get('http://localhost:3000/api/sendFile',{observe:'response',responseType:'blob'})
  }
  deployTf():Observable<any>{
    return this.http.get('http://localhost:3000/api/deployTf')
  }
}
