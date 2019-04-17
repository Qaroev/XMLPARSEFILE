import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class AppService {
  private heroesUrl = 'https://librarytajik.restlet.net:443/v1/lists/';  // URL to web api

  headers = new HttpHeaders({
    'content-type': 'application/json'
  });


  constructor(private http: HttpClient) {
  }

  getHeroes() {
    return this.http.get('http://localhost:8000/posts')
      .pipe(map((res: Response) => {
        return res;
      }));
  }

  postJson<T>(data: any): Observable<T> {
    return this.http.post<T>(
      this.heroesUrl,
      JSON.stringify(data),
      {headers: this.headers}
    );
  }
}
