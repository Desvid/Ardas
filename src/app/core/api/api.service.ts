import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'any'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  private formatErrors(error: any): Observable<any> {
    return throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Promise<any> { 
    return this.http.get(path, { params })
      .pipe(catchError(this.formatErrors))
      .toPromise()
  }
}