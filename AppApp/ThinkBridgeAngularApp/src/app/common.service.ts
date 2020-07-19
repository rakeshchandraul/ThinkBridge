import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from "./Model/Item";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http : HttpClient) {

  }

  public PostItem(emp : Item) : Observable<any>
  {
     return this.http.post("https://localhost:44380/api/item", emp);
  }

  
  public GetItem<Item>() : Observable<any>
  {
     return this.http.get<Item[]>("https://localhost:44380/api/item");
  }
}
