import { Component, OnInit, ElementRef, Input, ViewChild, Output, EventEmitter, ViewChildren, AfterViewInit, OnDestroy} from '@angular/core';
import { EventService } from '../event.service';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy{

  @ViewChildren('dynamiCom') dynamiCom;  
  id: number = 1;
  private sub: any;
  maile = {
      name: '',
      email: '',
      subject: '',
      message: ''
  };  
    
  constructor(private CmsService: ApiService, private event: EventService, private route: ActivatedRoute, private _route: Router) { }
    
  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
        this.id = +params['id'];
            if (isNaN(this.id)) this.id = 1;
            if(this.dynamiCom != null){
                this.ngAfterViewInit();
            }
      });
  }
    
  ngAfterViewInit(){
      this.dynamiCom.forEach(el=>{
          el.pobierzKontrolki(this.id);
      })
  }
    
 ngOnDestroy(){
     this.sub.unsubscribe();
 } 
 
 sendMaile(){
     if( this.maile.name === '' || this.maile.email === '' || this.maile.message === '' || this.maile.subject === '') this.event.wyswietlInfo('info','Proszę uzupełnić wszystkie pola');
     else{
         let reg = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
         if(!reg.test(this.maile.email)) this.event.wyswietlInfo('info','Wprowadź poprawny adres email');
         else{
             console.log('mail', this.maile)
         }
     }
 }
    
}
