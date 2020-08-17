import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../blogs/blogs.service';

@Component({
  selector: 'app-route-param-data-filter',
  templateUrl: './route-param-data-filter.component.html',
  styleUrls: ['./route-param-data-filter.component.scss']
})
export class RouteParamDataFilterComponent implements OnInit {

  constructor(private blogService: BlogsService) {
    console.log(blogService.getBlogs([]));
  }

  ngOnInit() {
  }

}
