import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Images, Image } from '../models/images';
import { Observable } from 'rxjs';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '8155615-d10f3f590ed88f059eab9a12f';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {


  constructor(
    private http: HttpClient
  ) {
  }

  getImgs(query: string, perPage: number, page: number): Observable<Images> {
    const url = this.prepareUrl(BASE_URL, query, perPage, page);
    return this.http.get<Images>(url);
  }

  prepareUrl(directory: string, query: string, perPage: number, page: number) {
    const search = query ? '&q=' + (query ? encodeURIComponent(query) : '') : '';
    return directory + '?key=' + API_KEY + search +
      '&per_page=' + (perPage && !isNaN(perPage) ? +perPage : 10) +
      '&page=' + (page && !isNaN(page) ? +page : 1);
  }
}
