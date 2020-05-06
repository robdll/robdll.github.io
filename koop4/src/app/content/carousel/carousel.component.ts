import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('800ms', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('800ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class CarouselComponent  {

  cards = [
    { title: "Frontend", items: ['uno', 'due', 'tre' ]},
    { title: "Backend", items: ['uno', 'due', 'tre' ]},
    { title: "System", items: ['uno', 'due', 'tre' ]},
  ];
  currentSlide = 0;
  
  constructor() { }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = undefined;
    setTimeout(() => {
      this.currentSlide = previous < 0 ? this.cards.length - 1 : previous;
    }, 800);
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = undefined;
    setTimeout(() => {
      this.currentSlide = next === this.cards.length ? 0 : next;
    }, 800);
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }

}
