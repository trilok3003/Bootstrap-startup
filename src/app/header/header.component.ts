import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  categories = [
    { name: 'Home' },
    { name: 'Popular Games' },
    { name: 'Table Games' },
    { name: 'Other Games' },
  ];
  isCollapsed = false;
  constructor() {}

  ngOnInit() {}

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
}
