import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { EventService } from './event.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit{
  title = 'app';
  @ViewChild('fluid') fluid;

    constructor(private toastrService: EventService) {}

    ngAfterViewInit(){
      if (localStorage.getItem('mbjGrupa')===null){
          localStorage.setItem('mbjGrupa', 'cookie');
          this.fluid.show();
      }
      
    }
    
}
