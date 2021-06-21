import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-hover-effects',
  templateUrl: './image-hover-effects.component.html',
  styleUrls: ['./image-hover-effects.component.scss'],
})
export class ImageHoverEffectsComponent implements OnInit {
  animations = [
    {
      class: 'image-hover-effect',
      title: 'Rotating Image Effect',
      src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      caption: 'Image Hover Effects',
      key: 'A',
    },
    {
      class: 'image-hover-effect-1',
      title: 'Left to Right Caption',
      src: 'https://images.iphonephotographyschool.com/22682/How-To-Blur-Background-On-iPhone.jpg',
      caption: 'Image Hover Effects',
      key: 'A',
    },
    {
      class: 'image-hover-effect-2',
      title: 'Swipe and Replace Background',
      src: 'https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/06/CB-Edit-Photo-Editing-background-Download-6.jpg?quality=100&f=auto',
      caption: 'Image Hover Effects',
      key: 'A',
    },
    {
      class: 'image-hover-effect-3',
      title: 'Hover and Move Background Upwards',
      src: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2020/04/Fitriandhita_color2.jpeg?auto=format&q=60&fit=max&w=930',
      caption: 'Image Hover Effects',
      key: 'A',
    },
    {
      class: 'image-hover-effect-4',
      title: 'Hover Effect',
      src: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/333.jpg',
      caption: 'Image Hover Effects',
      key: 'A',
    },
    {
      class: 'image-hover-effect-5',
      title: 'Hover Effect',
      src: 'https://images.ctfassets.net/usf1vwtuqyxm/7DvriklYdR7DBtc3OpJeUp/adbe1af8d340fe4a05f4b5afaef92b7d/release_1_ollivanders.png',
      caption: 'Image Hover Effects',
      key: 'B',
    },
    {
      class: 'image-hover-effect-6',
      title: 'Hover Effect',
      src: 'https://cdn.wallpapersafari.com/94/18/WeDMCT.jpg',
      caption: 'Image Hover Effects',
      key: 'B',
    },
    {
      class: 'image-hover-effect-7',
      title: 'Hover Effect',
      src: 'https://images.ctfassets.net/usf1vwtuqyxm/FguKzCQXYbXvJMS27FKqZ/5a936f1febc6e5767626c1831ded406a/USH_Hogwarts2_VB.jpg',
      caption: 'Image Hover Effects',
      key: 'B',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
