import {Component, OnInit} from '@angular/core';
import {FinancialsService} from '../../services/financials/financials.service';
import {Company} from '../../models/models';
import {CompanyService} from '../../services/company.service';
import {Router} from '@angular/router';


@Component({
    selector: 'app-winners',
    templateUrl: 'winners.page.html',
    styleUrls: ['winners.page.scss']
})
export class WinnersPage implements OnInit {

    winners;

    constructor(private finService: FinancialsService,
                private companyService: CompanyService,
                private router: Router) {
    }

    ngOnInit() {
        this.finService.getWinners(10).subscribe((res) => this.winners = res);
    }

    goCompanyDetails(symbol: any) {
        this.companyService.getIsinFromSymbol(symbol).subscribe(
            (res: Company) => this.router.navigateByUrl(`company/${res.isin}`)
        );
    }

}
