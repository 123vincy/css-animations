import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-hover-effects',
  templateUrl: './button-hover-effects.component.html',
  styleUrls: ['./button-hover-effects.component.scss'],
})
export class ButtonHoverEffectsComponent implements OnInit {
  animations = [
    {
      class: 'rotating-button-effect',
      title: 'Rotating Button Effect',
    },
    {
      class: 'rotating-button-effect-1',
      title: 'Swipe Button Effect',
    },
    {
      class: 'rotating-button-effect-2',
      title: 'Button Hover Effect',
    },
    {
      class: 'rotating-button-effect-3',
      title: 'Swipe Effect rom Top to Bottom',
    },
    {
      class: 'rotating-button-effect-4',
      title: 'Button Glowing Effect',
    },
    {
      class: 'rotating-button-effect-5',
      title: '2 Layers Button Swapping Effect',
    },
    {
      class: 'rotating-button-effect-6',
      title: 'Text Scaling Effect',
    },
    {
      class: 'rotating-button-effect-9',
      title: 'Swapping from Left to Right Effect',
    },
    {
      class: 'rotating-button-effect-7',
      title: 'Circular Swapping Button Effect',
    },
    {
      class: 'rotating-button-effect-8',
      title: '3 Layers Button Effect',
    },
    {
      class: 'rotating-button-effect-10',
      title: '3 Circles to Background Effect',
    },
    {
      class: 'rotating-button-effect-11',
      title: '3D Button Opening Effect',
    },
    {
      class: 'rotating-button-effect-13',
      title: 'Border Swapping Effect',
    },
    {
      class: 'rotating-button-effect-14',
      title: 'Border Growing Effect',
    },
    {
      class: 'rotating-button-effect-16',
      title: '4 Borders Growing Effect',
    },
    {
      class: 'rotating-button-effect-17',
      title: 'Borders Cut Scaling Effect',
    },
    {
      class: 'rotating-button-effect-18',
      title: 'Skewed Button Effect',
    },
    {
      class: 'rotating-button-effect-19',
      title: 'Pulsing Effect',
    },
    {
      class: 'rotating-button-effect-20',
      title: 'Borders Swipe Effect',
    },
    {
      class: 'button-stretch',
      title: 'Button Stretch Effect',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
