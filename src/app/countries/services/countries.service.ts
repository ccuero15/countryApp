import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { }

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const url: string = `${this.apiUrl}/alpha/${code}`;

    return this.http.get<Country[]>(url)
      .pipe(
        map(countries => countries.length > 0 ? countries[ 0 ] : null),
        catchError(() => of(null))
      );
  }
  searchCapital(query: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/capital/${query}`;
    return this.http.get<Country[]>(url).pipe(
      catchError(() => of([]))
    )
  }
  searchCountry(query: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/name/${query}`;
    return this.http.get<Country[]>(url).pipe(
      catchError(() => of([]))
    )
  }
  searchRegion(query: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/region/${query}`;
    return this.http.get<Country[]>(url).pipe(
      catchError(() => of([]))
    )
  }
}
