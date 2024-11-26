import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region',
  standalone: false,

  templateUrl: './by-region.component.html',
  styles: ``
})
export class ByRegionComponent {
  constructor(private countriesService:CountriesService){}
  public countries: Country[] = [];

  searchByRegion(term: string): void {
    console.log('desde Capytal-Page');
    console.log({term});
    this.countriesService.searchRegion(term).subscribe(countries => this.countries = countries)
  }
}
