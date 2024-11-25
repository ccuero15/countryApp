import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  standalone: false,

  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @Input() public placeholder :string = '';
  @Output() public onValue = new EventEmitter<string>();
  //@ViewChild('txtInput')
  emitValue(value:string){
    this.onValue.emit(value)

  }

}
