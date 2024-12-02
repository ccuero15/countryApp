import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  standalone: false,

  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading: boolean = false;

  constructor(private countriesService: CountriesService) { }
  ngOnInit() { }
  searchByCapital(term: string): void {
    this.isLoading = true;
    console.log('desde Capytal-Page');
    console.log({ term });
    this.countriesService.searchCapital(term).subscribe(countries => {
      this.countries = countries
      this.isLoading = false
    }
  )
  }
}
