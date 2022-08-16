import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Athletes';

  athletes = [
    { 
      name: " Lebron James",
      sport: "Basketball", 
      active: true
    }, 
    { 
      name: "Roger Federer", 
      sport: "Tennis", 
      active: false
    }, 
    { 
      name: "Tiger Woods", 
      sport: "Golf", 
      active: true
    }
  ]
}
