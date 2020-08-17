import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-blog-list-item',
  templateUrl: './blog-list-item.component.html',
  styleUrls: ['./blog-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogListItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
