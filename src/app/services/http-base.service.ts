import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { IHttpBaseService } from './http-base.interface';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpBaseService implements IHttpBaseService {

    private baseUrl = 'http://localhost:8080/';
    private fullUrl: string;

    constructor(
        private http: Http,
        private resource: string
    ) {
        this.fullUrl = `${this.baseUrl}${this.resource}`;
        console.log(this.fullUrl);
    }

    // TODO: async await
    getAll<T>(): Promise<T[]> {
        console.log(this.fullUrl)
        return this.http.get(this.fullUrl)
            .toPromise()
            .then(response => response.json() as T[])
            .catch(this.handleError);
    }

    get<T>(id: number): Promise<T> {
        return this.http.get(`${this.fullUrl}/${id}`)
            .toPromise()
            .then(response => response.json() as T)
            .catch(this.handleError);
    }

    post<T>(body: string): Promise<T> {
        return this.http.post(this.fullUrl, body)
            .toPromise()
            .then(response => response.json() as T)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
