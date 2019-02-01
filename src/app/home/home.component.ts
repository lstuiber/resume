import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  constructor() { 
  }
 fade(id){
 var element = document.getElementById(id);
 element.style.display = "block";
 element.style.opacity = '0';
 element.style.animation = '2s ease 0s normal forwards 1 fadein';
 
}
  ngOnInit() {
  }

}
