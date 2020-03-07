import {Component} from '@angular/core';
import {CompanyService} from '../services/company.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-winners',
    templateUrl: 'winners.page.html',
    styleUrls: ['winners.page.scss']
})
export class WinnersPage {

    companies: any [];

    constructor(private companyService: CompanyService,
                private router: Router) {
        this.companyService.get_all_companies().subscribe(res => this.companies = res.filter(company => 'name' in company));
    }

    navToCompanyPage(isin: any) {
        this.router.navigate([`company/${isin}`]);
    }
}
