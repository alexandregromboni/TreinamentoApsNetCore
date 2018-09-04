import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  data: any;
  apiUrl = 'http://localhost:56661';

  constructor(public http: HttpClient) {
    console.log('Hello RestServiceProvider Provider');
  }

  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/api/User')
        .subscribe(data => {
          this.data = data;
          resolve(data);
        },
          err => {
            console.log(err);
          });
    });
  }

  getUser(id) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/api/User/' + id)
        .subscribe(data => {
          this.data = data;
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }

  saveUser(data) {
    if (data.id > 0) {
      return new Promise((resolve, reject) => {
        this.http.put(this.apiUrl + '/api/User', JSON.constructor(data)).subscribe(res => {
          resolve(res);
        }, (err) => {
          console.log(err);
        });
      });
    } else {
      return new Promise((resolve, reject) => {
        this.http.post(this.apiUrl + '/api/User', JSON.constructor(data)).subscribe(res => {
          resolve(res);
        }, (err) => {
          console.log(err);
        });
      });
    }
  }

  public remove(id: number) {
    return new Promise(resolve => {
      this.http.delete(this.apiUrl + '/api/User/' + id)
        .subscribe(data => {
          this.data = data;
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }

}
