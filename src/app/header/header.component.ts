import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() recherche: string;

  @Output() message = new EventEmitter<string>();
  searchText:string;
buttonStatus: boolean = false;

send() {
  this.message.emit(this.searchText);
  this.buttonStatus=true;
  }
  
 // table : StoreComponent;

  constructor() { }

  ngOnInit() {
  }

}
