import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParadorService {

  constructor(private http: HttpClient) { }

  obtenerParadores(): Observable<any[]> {
    return this.http.get<any[]>('http://moralo.atwebpages.com/paradores/obtenerParadores.php');
  }
}
