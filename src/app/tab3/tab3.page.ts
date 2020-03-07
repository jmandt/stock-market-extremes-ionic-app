import { Component } from '@angular/core';
import {CompanyService} from '../services/company.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  companies: any [];
  filteredCompanies;

  constructor(private companyService: CompanyService,
              private router: Router) {
    this.companyService.get_all_companies().subscribe(res => {
      this.companies = res.filter(company => 'name' in company);
      this.filteredCompanies = this.companies;
    });
  }

  navToCompanyPage(isin: any) {
    this.router.navigate([`company/${isin}`]);
  }

  filterItems($event: CustomEvent<any>) {
    this.filteredCompanies = this.companies
        .filter(item => item.name.toLowerCase().includes($event.detail.value));
  }
}
