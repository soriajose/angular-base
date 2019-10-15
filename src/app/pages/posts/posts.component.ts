import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  mensajes: any;


  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    console.log(`1`);
    this.mensajes = this.dataService.getPosts();
    console.log(this.mensajes);
    console.log(`2`);

    // DE MANERA TRADICIONAL
    // this.mensajes = this.dataService.getPosts().subscribe( (posts: any[]) => {
    //   console.log(posts);
    //   this.mensajes = posts;
    // });

  }

  escuchaClick(id: number) {
    console.log('Click en:', id);
  }

}
