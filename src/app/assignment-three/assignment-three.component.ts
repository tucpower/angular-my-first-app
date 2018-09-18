import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-three',
  templateUrl: './assignment-three.component.html',
  styleUrls: ['./assignment-three.component.css']
})
export class AssignmentThreeComponent implements OnInit {

  showParagraph = false;
  clicks = [];

  constructor() { }

  ngOnInit() {
  }

  toggleParagraph() {
    //this.showParagraph = this.showParagraph === true ? false : true;
    this.showParagraph = !this.showParagraph;
    //this.clicks.push(this.clicks.length + 1);
    this.clicks.push(new Date());
  }

}
