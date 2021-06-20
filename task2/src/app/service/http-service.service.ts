import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }
  getDetails() {
    return this.http.get(
      'https://3000-yellow-silverfish-og7z94us.ws-us09.gitpod.io/userDetails'
    );
  }
}
