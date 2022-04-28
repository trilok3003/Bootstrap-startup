import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  public MODULES: any[] = [
    {
      label: 'DASHBOARD',
      isChecked: false,
    },
    {
      label: 'PURCHASING',
      isChecked: false,
    },
    {
      label: 'WORKFLOW',
      isChecked: false,
    },
    {
      label: 'SERVICE',
      isChecked: false,
    },
    {
      label: 'ACCOUTING',
      isChecked: false,
    },
  ];

  public PERMISSIONS: string[] = ['READ', 'CREATE', 'UPDATE', 'DELETE'];
  constructor() {}

  ngOnInit() {
  }

}