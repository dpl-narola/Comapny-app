import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  baseUrl = environment.apiUrl;
  constructor(private httpclient: HttpClient) {}
  

  getCompanyData(): Observable<any[]> {
    return this.httpclient.get<any[]>(
      this.baseUrl + 'services.php?type=retrieve_list_of_records',
      {
        
      }
    );
  }

  createCompany(data: any): Observable<any[]> {
    return this.httpclient.post<any[]>(
      this.baseUrl + 'services.php?type=add_new_records',
      data
    );
  }
}
