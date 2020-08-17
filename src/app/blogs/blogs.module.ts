import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListItemComponent } from './blog-list-item/blog-list-item.component';
import { BlogsService } from './blogs.service';



@NgModule({
  declarations: [BlogListItemComponent],
  imports: [
    CommonModule
  ],
  exports: [BlogListItemComponent],
  providers: [BlogsService]
})
export class BlogsModule { }
