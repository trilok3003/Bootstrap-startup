import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
  borderBottom: boolean;
  tabs = [
    { name: 'Home', active: true },
    { name: 'About', active: false },
    { name: 'Project', active: false },
    { name: 'Contact', active: false },
  ];
  @Output() clicked = new EventEmitter();

  constructor() {}

  ngOnInit() {}
  onTabChange(index) {
    this.tabs.map((ele, i) => {
      ele.active = i === index;
    });
    this.clicked.emit(index);
  }
}
