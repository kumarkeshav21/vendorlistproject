import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { vendor } from 'src/app/vendor'

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  private baseUrl="http://192.168.0.102:8062/nirmalyaRest/api/getVendorList?createdBy=CUS000001";
  constructor(private httpClient:HttpClient) { }

  getVendorList():Observable<vendor[]>{
    return this.httpClient.get<vendor[]>('${this.baseUrl}');
  }
}
