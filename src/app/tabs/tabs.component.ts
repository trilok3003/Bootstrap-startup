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
    { name: 'About', active: true },
    { name: 'Project', active: true },
    { name: 'Contact', active: true },
  ];
  @Output() clicked = new EventEmitter();

  constructor() {}

  ngOnInit() {}
  onTabChange(index) {
    this.tabs.map((ele, i) => {
      ele.active = (i === index)
    })
    this.clicked.emit(index);
  }
}
