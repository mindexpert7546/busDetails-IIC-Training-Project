import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BusDetails } from '../bus-details';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  busServer =  "http://localhost:8080"

 
  getAllBus():Observable<BusDetails[]> {
 
    return this.http.get<BusDetails[]>(this.busServer+'/busDetails/');
 
  }

  addBusDetails(addBusRequest:BusDetails):Observable<BusDetails[]>{
  
    return this.http.post<BusDetails[]>(this.busServer+'/busDetails/',addBusRequest);
 
  }

  getBusbyId(id:string):Observable<BusDetails>{
    return this.http.get<BusDetails>(this.busServer+'/busDetails/'+id);
  }

  updateBusDetails(id: string, updateBusDetails: BusDetails): Observable<BusDetails> {
    return this.http.put<BusDetails>(this.busServer + '/busDetails/' + id, updateBusDetails);
  }

  deleteBus(id:string):Observable<BusDetails>
  {
    return this.http.delete<BusDetails>(this.busServer+'/busDetails/'+id);
  }
  
  searchBusDetails(queryParams: { [param: string]: any }): Observable<any> {
    let params = new HttpParams();
    Object.keys(queryParams).forEach(key => {
      if (queryParams[key] != null && queryParams[key] !== '') {
        params = params.append(key, queryParams[key]);
      }
    });

    return this.http.get(this.busServer +'/busDetails/', { params });
  }

  // login(username:string,password:string)
  // {
  //   return this.http.post<any>(`${this.busServer}/login`,{username,password});
  // }
  
}
