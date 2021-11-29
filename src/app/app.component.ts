import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'LetsWatch';
  counter = 0;
  index = 0;
  b:boolean = false;
  f:boolean = false;

  ngOnInit(): void {
    console.log("testing");
    //this.stop();
  }

  loadPage(link:string){ 

    if(link.substring(0,8) === "https://" || link.substring(0,7) === "http://" )
    {
      document.querySelector('iframe').src = link;
    }
    else {
      link = "http://"+link
      document.querySelector('iframe').src = link;
    }
    //console.log(link);
   }

  back(){
    this.index--;
    this.b = true;
    window.history.back();
  }
  
  forward(){
    this.index++;
    this.f = true;
    window.history.forward();
  }

  stop(){
    console.log();
    //document.querySelector('iframe').src = "";
  }

  newPage(){
    if(!this.b && !this.f){
      this.index++;
      this.counter=this.index;
    }
    this.b = false;
    this.f = false;
    console.log("counter: "+this.counter + ", index: "+this.index);
  }
}
