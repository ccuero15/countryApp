import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-contry-page',
  standalone: false,

  templateUrl: './by-contry-page.component.html',
  styles: ``
})
export class ByContryPageComponent {
  constructor(private countriesService:CountriesService){}
  public countries: Country[] = [];

  searchByCountry(term: string): void {
    console.log('desde Capytal-Page');
    console.log({term});
    this.countriesService.searchCountry(term).subscribe(countries => this.countries = countries)
  }

}
