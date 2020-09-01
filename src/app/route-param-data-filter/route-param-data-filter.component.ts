import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../blogs/blogs.service';

@Component({
  selector: 'app-route-param-data-filter',
  templateUrl: './route-param-data-filter.component.html',
  styleUrls: ['./route-param-data-filter.component.scss']
})
export class RouteParamDataFilterComponent implements OnInit {
  categories = this.blogService.getCategories();
  blogs = this.blogService.getBlogs([]);
  constructor(private blogService: BlogsService) {
  }

  ngOnInit() {
  }

}
