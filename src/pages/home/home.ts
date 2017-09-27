import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cards = [
      {
          imgPath:  "assets/img/animeImg1.png",
          title:    "My Hero Academia Season 3",
          desc:     "Fan Forum!",
          favorited: false,
          liked:     false
      },
      {
          imgPath:  "assets/img/animeImg2.png",
          title:    "Parasyte: The Maxim Season 2",
          desc:     "Fan Theory!",
          favorited: false,
          liked:     false
      },
      {
          imgPath:  "assets/img/animeImg3.jpg",
          title:    "Attack on Titan Season 2",
          desc:     "Recap and Review!",
          favorited: false,
          liked:     false
      },
      {
          imgPath:  "assets/img/animeImg4.jpg",
          title:    "One Punch Man Season 2",
          desc:     "Expectations and Hopes!",
          favorited: false,
          liked:     false
      },
      {
          imgPath:  "assets/img/animeImg5.jpg",
          title:    "Garden of Words",
          desc:     "Design and Art in Anime Forum!",
          favorited: false,
          liked:     false
      },
      {
          imgPath:  "assets/img/animeImg6.jpg",
          title:    "Your Lie in April",
          desc:     "Music and Emotions in Anime Forum!",
          favorited: false,
          liked:     false
      },
      {
          imgPath:  "assets/img/animeImg7.jpg",
          title:    "Tokyo Ghoul Season 3",
          desc:     "Info, Expectations & Book Vs. Anime Forum!",
          favorited: false,
          liked:     false
      },
      {
          imgPath:  "assets/img/animeImg8.jpg",
          title:    "Gangsta. Season 2",
          desc:     "Possibilities in the wake of the bankruptcy of Manglobe Studio!",
          favorited: false,
          liked:     false
      },
      {
          imgPath:  "assets/img/animeImg9.jpg",
          title:    "Durarara!! Season 2",
          desc:     "DVD and Blu-Ray Confirm Release Date!",
          favorited: false,
          liked:     false
      },
      {
          imgPath:  "assets/img/animeImg10.jpg",
          title:    "Bleach",
          desc:     "Possible Restart to Anime!",
          favorited: false,
          liked:     false
      }
  ];

  constructor(public navCtrl: NavController, public alertCtrl:AlertController) {

  }

    clickFav(card) {
        let index = this.cards.indexOf(card);

        if(index > -1){
            if(card.favorited){
                this.cards[index].favorited = false;
            }else{
                this.cards[index].favorited = true;
            }
        }
    }

    clickLike(card){
        let index = this.cards.indexOf(card);

        if(index > -1){
            if(card.liked){
                this.cards[index].liked = false;
            }else{
                this.cards[index].liked = true;
            }
        }
    }
    addCard(){
        let prompt = this.alertCtrl.create({
            title: "Add Forum",
            inputs: [
                {
                    name:"imgPath", placeholder:"Enter Image URL (Optional)"
                },
                {
                    name:"title",   placeholder:"Enter Title of Forum"
                },
                {
                    name:"desc",    placeholder:"Enter Description of Forum"
                }
            ],
            buttons: [
                {
                    text: "Abort"
                },
                {
                    text: "Confirm",
                    handler: data => {
                        console.log(data.imgPath);

                        if(data.imgPath == "") {
                            data.imgPath = "assets/img/imgPlaceHolder.png"
                        }
                        this.cards.push(data);

                        if(data.title == ""){
                            data.title = "No Title"
                        }

                        if(data.desc == ""){
                            data.desc = "No Description"
                        }
                    }
                }
            ]
        });
        prompt.present();
    }

    editCard(cards) {
        let prompt = this.alertCtrl.create({
            title: "Edit Forum",
            inputs: [
                {
                    name:"imgPath", placeholder:"Enter Image URL (Optional)"
                },
                {
                    name:"title",   placeholder:"Enter Title of Forum"
                },
                {
                    name:"desc",    placeholder:"Enter Description of Forum"
                }
            ],
            buttons: [
                {
                    text: "Abort"
                },
                {
                    text: "Confirm",
                    handler: data => {
                        console.log(data);
                        if(data.imgPath == ""){
                            data.imgPath = "assets/img/imgPlaceHolder.png"
                        }
                        let index = this.cards.indexOf(cards);
                        if (index > -1){
                            this.cards[index] = data;
                        }

                        if(data.title == ""){
                            data.title = "No Title"
                        }

                        if(data.desc == ""){
                            data.desc = "No Description"
                        }
                    }
                }
            ]
        });
        prompt.present();
    }

    eraseCard(cards) {
        let index = this.cards.indexOf(cards);

        this.cards.splice(index, 1)
    }

}
