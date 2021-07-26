import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Album } from './album';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  private _albumUrl:string  = "../assets/album.json";
  private album: Album;

  constructor(private _http: Http) { }
  getAlbum(id: number): Observable<Album>{
    return this._http.get(this._albumUrl).map(response => this.album = <Album>response.json());
  }
}
