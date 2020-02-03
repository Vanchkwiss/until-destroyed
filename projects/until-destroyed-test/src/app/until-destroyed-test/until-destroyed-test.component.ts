import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-until-destroyed-test',
  templateUrl: './until-destroyed-test.component.html',
  styleUrls: ['./until-destroyed-test.component.scss']
})
export class AutoUnsubscribeTestComponent implements OnInit {

// show the component content 1 (destroyed if not shown)
public showContent1: boolean = true;
// show the component content 2 (destroyed if not shown)
public showContent2: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Call on click on destroy content button 1
   */
  public onClickOnDestroyContentButton1() {
    this.showContent1 = false;
  }

  /**
   * Call on click on destroy content button 2
   */
  public onClickOnDestroyContentButton2() {
    this.showContent2 = false;
  }
}

