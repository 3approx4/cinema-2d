import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-action-page',
  templateUrl: './action-page.component.html',
  styleUrls: ['./action-page.component.css']
})
export class ActionPageComponent implements OnInit, OnDestroy {
  

  constructor() { }

  ngOnInit() {
    document.addEventListener('mousemove', this.paralax);
  }
  ngOnDestroy() {
    document.removeEventListener('mousemove', this.paralax);
  }

  paralax(e: MouseEvent) {
    let speed = 4;
    let image = document.getElementById("parallax-image");
    if (image)
    {
      let x = (window.innerWidth - e.pageX * speed ) / 100;
      let y = (window.innerHeight - e.pageY * speed ) / 100;
      image.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    }
  }

}
