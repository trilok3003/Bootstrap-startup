import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-2',
  templateUrl: './tabs-2.component.html',
  styleUrls: ['./tabs-2.component.scss'],
})
export class Tabs2Component implements OnInit {
  tabs = [
    { name: 'Home', active: true },
    { name: 'About', active: false },
    { name: 'Project', active: false },
    { name: 'Contact', active: false },
  ];
  constructor() {}

  ngOnInit() {}
}
