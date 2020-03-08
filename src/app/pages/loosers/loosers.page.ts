import {Component, OnInit} from '@angular/core';
import {FinancialsService} from '../../services/financials/financials.service';
import {CompanyService} from '../../services/company.service';
import {Router} from '@angular/router';
import {Company} from '../../models/models';

@Component({
    selector: 'app-loosers',
    templateUrl: 'loosers.page.html',
    styleUrls: ['loosers.page.scss']
})
export class LoosersPage implements OnInit {

    loosers;

    constructor(private finService: FinancialsService,
                private companyService: CompanyService,
                private router: Router) {
    }

    ngOnInit() {
        this.finService.getLoosers(10).subscribe((res) => {
            this.loosers = res;
            console.log(res);
        });
    }


    goCompanyDetails(symbol: any) {
        this.companyService.getIsinFromSymbol(symbol).subscribe(
            (res: Company) => this.router.navigateByUrl(`company/${res.isin}`)
        );
    }
}
