import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { EventService } from './event.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit, OnInit{
  title = 'app';
  @ViewChild('fluid') fluid;
  year: string = '';

    constructor(private toastrService: EventService) {}
    
    ngOnInit(){
        this.year = new Date().getFullYear().toString(); 
    }

    ngAfterViewInit(){
           
      if (localStorage.getItem('mbjGrupa')===null){
          localStorage.setItem('mbjGrupa', 'cookie');
          this.fluid.show();
      }
      
    }
    
}
