import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';
import { untilDestroyed } from 'projects/until-destroyed/src/public-api';


@Component({
  selector: 'app-until-destroyed-content-test',
  templateUrl: './until-destroyed-content-test.component.html',
  styleUrls: ['./until-destroyed-content-test.component.scss']
})
export class AutoUnsubscribeContentTestComponent implements OnInit, OnDestroy {

  // id of the component
  @Input() id: number;

  constructor() { }

  ngOnInit() {
    const obs = interval(3000);
    obs.pipe(untilDestroyed(this)).subscribe((value) => console.log("Observer 1 in component content " + this.id +" got the value " + value));
    obs.pipe(untilDestroyed(this)).subscribe((value) => console.log("Observer 2 in component content " + this.id +" got the value " + value));
  }

  ngOnDestroy(): void {
  }
}
