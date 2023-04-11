import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import cardData from './cardsdata.json';
import cardData2 from './cardsdatasecond.json';

interface Carddata {  
  id: Number;  
  data: String;  
  title: String;  
  para: String;  
  button: String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'drag-drop-project';
  carddata:Carddata[]=cardData;
  carddatatwo:Carddata[]=cardData2;

  constructor(){
  }

  drop(event: CdkDragDrop<any>) {
    if(event.previousContainer!==event.container){
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex)
    }else{
      moveItemInArray(this.carddata, event.previousIndex, event.currentIndex);
    }
  }

  ngOnInit(): void {
    
  }
}
