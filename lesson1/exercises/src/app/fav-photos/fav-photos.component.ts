import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'All the Photos!';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Supermillion_Visuals_-_Aston_Fresh_Park_1-02601.jpg';
  image3 = '';

  constructor() { }

  ngOnInit() {
  }

}