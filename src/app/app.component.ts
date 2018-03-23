import { Component } from '@angular/core';
import { EventService } from './event.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
    
    constructor(private toastrService: EventService) {}
    
    test(){
        this.toastrService.wyswietlInfo('success', 'test error');
    }
    
}
