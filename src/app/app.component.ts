import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'phoneInteract';

  ngOnInit(): void {
    //this.stop();
  }


  loadPage(link:string){ 
    if(link.substring(0,4) === "www.")
    {
      link = "https://"+link
    }
    else if((link.substring(8) !== "https://" || link.substring(7) !== "http://" ) && link.substring(0,3) !== "www.")
    {
      link = "https://www."+link
    }
    //console.log(link);
    document.querySelector('iframe').src = link;
   }

  back(){
    window.history.back();
  }
  
  forward(){
    window.history.forward();
  }

  stop(){
    console.log(window.location.href);
    //document.querySelector('iframe').src = "";
  }
}
