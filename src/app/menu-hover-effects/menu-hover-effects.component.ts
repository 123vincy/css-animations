import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-hover-effects',
  templateUrl: './menu-hover-effects.component.html',
  styleUrls: ['./menu-hover-effects.component.scss'],
})
export class MenuHoverEffectsComponent implements OnInit {
  animations = [
    {
      class: 'menu-hover-effect-1',
      title: 'Growing Borders Menu Effect',
      key: 'A',
    },
    {
      class: 'menu-hover-effect-2',
      title: 'Background and Borders Menu Effect',
      key: 'A',
    },
    {
      class: 'menu-hover-effect-3',
      title: 'Splitted Background Menu Effect',
      key: 'B',
    },
    {
      class: 'menu-hover-effect-4',
      title: 'Moving Bottom Borders Menu Effect',
      key: 'A',
    },
    {
      class: 'menu-hover-effect-5',
      title: 'Moving Bottom Borders Menu Effect',
      key: 'C',
    },
    {
      class: 'menu-hover-effect-6',
      title: 'Borders and Background Menu Effect',
      key: 'A',
    },
    {
      class: 'menu-hover-effect-7',
      title: 'Colourful Layered Menu Effect',
      key: 'A',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
