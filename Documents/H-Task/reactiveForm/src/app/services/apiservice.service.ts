
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
 
  constructor(private httpClient: HttpClient) { }
 
 
  Post<T>(apiEndPoint: string, data: unknown): Observable<T> {
    return this.httpClient.post<T>(environment.url + apiEndPoint, data, { withCredentials: true });
  }
 
  PostById<T>(apiEndPoint: string, id: number, data: unknown):Observable<T>{
    return this.httpClient.post<T>(environment.url + apiEndPoint + `/${id}`, data);
  }
 
  Get<T>(apiEndPoint: string, queryParams?: unknown): Observable<T> {
    
    return this.httpClient.get<T>(environment.url + apiEndPoint )
  }
 
  GetByHeaders<T>(apiEndPoint: string, queryParams?: unknown): Observable<T> {
   
    return this.httpClient.get<T>(environment.url + apiEndPoint , {
        responseType: "blob" as 'json',
      
    })
  }
 
  PostByHeaders<T>(apiEndPoint: string,data: any, queryParams?: unknown): Observable<T> {
    // let qp = this.utilityService.jsonToQueryString(queryParams)
    return this.httpClient.post<T>(environment.url + apiEndPoint ,data, {
        responseType: "blob" as 'json',
    })
  }
 
  GetById<T>(apiEndPoint: string, id: number, queryParams?: unknown): Observable<T> {
    // let qp = this.utilityService.jsonToQueryString(queryParams)
    return this.httpClient.get<T>(environment.url + apiEndPoint + `/${id}` )
  }
 
  Put<T>(apiEndPoint: string, data?: unknown) :Observable<T> {
    return this.httpClient.put<T>(environment.url + apiEndPoint, data);
  }
 
  PutById<T>(apiEndPoint: string, id: number, data: unknown):Observable<T> {
    return this.httpClient.put<T>(environment.url + apiEndPoint + `/${id}`, data)
  }
 
  Delete<T>(apiEndPoint: string, id: number):Observable<T> {
    return this.httpClient.delete<T>(environment.url + apiEndPoint + `/${id}`)
  }
}