import { Http } from '@angular/http';
import { HttpBaseService } from './http-base.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ImageService extends HttpBaseService {

    constructor(http: Http) {
        super(http, 'images');
    }
}
