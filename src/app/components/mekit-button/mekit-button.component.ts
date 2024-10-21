import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';

@Component({
  selector: 'app-mekit-button',
  templateUrl: './mekit-button.component.html',
  styleUrls: ['./mekit-button.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule],

})
export class MekitButtonComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
