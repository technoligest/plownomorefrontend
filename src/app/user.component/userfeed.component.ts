import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


class User{
  name:string;
  years:number;
  rating:number;
  profilePictureLink:string;
  portfolioPicturesLinks:string[];

  constructor(name:string,years:number,rating:number,profilePicture:string,portfolioPictures:string[]){
    this.name = name;
    this.years = years;
    this.rating = rating;
    this.profilePictureLink = profilePicture;
    this.portfolioPicturesLinks = portfolioPictures;
  }
}

@Component({
  selector: 'users-feed',
  templateUrl: './userfeed.component.html',
  styleUrls: ['./userfeed.component.css']
}) 
export class UserFeedComponent {
  users: User[]= [new User("Muhab",15,2,"https://placekitten.com/400/400",[]),
                  new User("Ehab",15,4,"https://placekitten.com/400/400",[])]
  name = 'Photo On Demandd';
  color = "blue"
  ratingStar= faCoffee;
}
