import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByContryPageComponent } from './pages/by-contry-page/by-contry-page.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

const routes: Routes = [
  { path: 'by-capital',
    component: ByCapitalPageComponent
  },
  { path: 'by-country',
    component: ByContryPageComponent
  },
  { path: 'by-capital',
    component: ByRegionComponent
  },
  { path: 'by-capital',
    component: CountryPageComponent
  },
]


@NgModule({
  declarations: [],
  imports: []
})
export class CountriesRoutingModule { }