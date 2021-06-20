import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
})
export class AnimationsComponent implements OnInit {
  animations = [
    'rotating-button-effect',
    'rotating-button-effect-1',
    'rotating-button-effect-2',
    'rotating-button-effect-3',
    'rotating-button-effect-4',
    'rotating-button-effect-5',
    'rotating-button-effect-6',
    'rotating-button-effect-9',
    'rotating-button-effect-7',
    'rotating-button-effect-8',
    'rotating-button-effect-10',
    'rotating-button-effect-11',
    'rotating-button-effect-13',
    'rotating-button-effect-14',
    'button-stretch',
  ];

  constructor() {}

  ngOnInit(): void {}
}
