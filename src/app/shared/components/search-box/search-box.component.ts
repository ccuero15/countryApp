import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  standalone: false,

  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent implements OnInit {


  private debouncer = new Subject<string>

  @Input() public placeholder :string = '';
  @Output() public onValue = new EventEmitter<string>();
  //@ViewChild('txtInput')
  @Output() public onDebounce = new EventEmitter<string>();

  constructor(){}

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(500)
    )
    .subscribe( value =>{
      this.onDebounce.emit(value)
      console.log('debouncer',value)
    })
  }

  emitValue(value:string){
    this.onValue.emit(value)
  }

  onkeyPress(searchTerm:string){
    this.debouncer.next(searchTerm)
  }

}
