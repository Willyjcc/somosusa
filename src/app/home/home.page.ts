import { Component, OnInit, HostListener } from '@angular/core';
import { TaskI } from '../models/task.interface';
import { TodoService } from '../servicios/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 2,
    grabCursor: true,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      520: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    }
  };
  todos: TaskI[];
  constructor(private todoService: TodoService) {}
  ngOnInit(){
    this.todoService.getTodos().subscribe((todos) =>{
      console.log('Todoss', todos);
      this.todos = todos;
    })
  }
  scrollTo(section) {
    document.querySelector('#' + section)
    .scrollIntoView({behavior:"smooth"});
  }
  @HostListener("ionScroll", [])
  onWindowScroll() {
    let shand = document.getElementsByClassName('sticky') as HTMLCollectionOf<HTMLElement>;
    if (shand.length != 0) {
      shand[0].style.background = "#000";
      shand[0].style.height = "100px";
    }
  }
}