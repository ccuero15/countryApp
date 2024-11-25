import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  standalone: false,

  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
  searchByCapital(term: string): void {
    console.log('desde Capytal-Page');
    console.log({term});

  }
}
