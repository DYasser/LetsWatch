import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'phoneInteract';
  link = "http://amazon.co.uk"; 

  LoadPage(smtg){ 
    document.querySelector('iframe').src = smtg;
   }
}
