import { Injectable } from '@angular/core';
import { CATEGORIES } from './blogs.model';
import { of, Observable } from 'rxjs';
import BLOGS from '../../assets/blog.angular.io-feed.json';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor() { }

  getCategories(): Observable<string[]> {
    return of(CATEGORIES);
  }

  getBlogs(categories: string[]) {
    return of(BLOGS);
  }
}
