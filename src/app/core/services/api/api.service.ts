import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public baseUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  get<T>(url: string, params?: string): Observable<T> {
    url = this.addParamsOnUrl(url, params);
    return this.httpClient.get<T>(this.baseUrl + url);
  }

  getFile(url: string, params?: string): Observable<Blob> {
    url = this.addParamsOnUrl(url, params);
    return this.httpClient.get(this.baseUrl + url, { responseType: 'blob' });
  }

  post<T>(url: string, body: any, params?: string): Observable<T> {
    url = this.addParamsOnUrl(url, params);
    return this.httpClient.post<T>(this.baseUrl + url, body);
  }

  put<T>(url: string, body: any): Observable<T> {
    return this.httpClient.put<T>(this.baseUrl + url, body);
  }

  patch<T>(url: string, body: any): Observable<T> {
    return this.httpClient.patch<T>(this.baseUrl + url, body);
  }

  delete<T>(url: string): Observable<T> {
    return this.httpClient.delete<T>(this.baseUrl + url);
  }

  private addParamsOnUrl(url: string, params?: string): string {
    return params ? `${url}?${params}` : url;
  }
}
