import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cards = [
      {
          imgPath:  "animeImg1.png",
          title:    "My Hero Academia Season 3",
          desc:     "Fan Forum!",
          favorited: false,
          liked:     false
      },
      {
          imgPath:  "animeImg2.png",
          title:    "Parasyte: The Maxim Season 2",
          desc:     "Fan Theory!",
          favorited: false,
          liked:     false
      },
      {
          imgPath:  "animeImg3.jpg",
          title:    "Attack on Titan Season 2",
          desc:     "Recap and Review!",
          favorited: false,
          liked:     false
      },
      {
          imgPath:  "animeImg4.jpg",
          title:    "One Punch Man Season 2",
          desc:     "Expectations and Hopes!",
          favorited: false,
          liked:     false
      },
      {
          imgPath:  "animeImg5.jpg",
          title:    "Garden of Words",
          desc:     "Design and Art in Anime Forum!",
          favorited: false,
          liked:     false
      },
      {
          imgPath:  "animeImg6.jpg",
          title:    "Your Lie in April",
          desc:     "Music and Emotions in Anime Forum!",
          favorited: false,
          liked:     false
      },
      {
          imgPath:  "animeImg7.jpg",
          title:    "Tokyo Ghoul Season 3",
          desc:     "Info, Expectations & Book Vs. Anime Forum!",
          favorited: false,
          liked:     false
      },
      {
          imgPath:  "animeImg8.jpg",
          title:    "Gangsta. Season 2",
          desc:     "Possibility in the wake of the bankruptcy of Manglobe Studio!",
          favorited: false,
          liked:     false
      },
      {
          imgPath:  "animeImg9.jpg",
          title:    "Durarara!! Season 2",
          desc:     "DVD and Blu-Ray Confirm Release Date!",
          favorited: false,
          liked:     false
      },
      {
          imgPath:  "animeImg10.jpg",
          title:    "Bleach",
          desc:     "Possible Restart to Anime!",
          favorited: false,
          liked:     false
      }
  ];

  constructor(public navCtrl: NavController) {

  }

}
