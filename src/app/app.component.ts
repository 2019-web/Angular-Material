import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  time = 0;

  ngOnInit():void {
    let self = this;
    setInterval(function () {
      self.time += 1;
    }, 1000);
  }

  addOneSecond():void {
    this.time += 1;
  }
}
