import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss']
})

export class WelcomeScreenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout( () => { this.playAudio(); }, 3000 )
   }

   playAudio(){
    const audio = new Audio();
    audio.src = '../../assets/audio/welcome-sound.wav';
    audio.volume = 0.2;
    audio.load();
    audio.play();
  }

}
