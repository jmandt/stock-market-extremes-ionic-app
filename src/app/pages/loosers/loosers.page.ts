import {Component, OnDestroy, OnInit} from '@angular/core';
import {FinancialsService} from '../../services/financials/financials.service';
import {Financials} from '../../models/models';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-loosers',
    templateUrl: 'loosers.page.html',
    styleUrls: ['loosers.page.scss']
})
export class LoosersPage implements OnInit, OnDestroy {

    loosers: Financials [];
    subscriptions: Subscription [] = [];

    constructor(private finService: FinancialsService) {
    }

    ngOnInit() {
        this.subscriptions.push(
            this.finService.getLoosers(10).subscribe((res: Financials []) => {
                this.loosers = [];
                this.sortFinancials(res).forEach((item: Financials) => {
                    this.loosers.filter((looser: Financials) => looser.symbol === item.symbol).length === 0 ?
                        // tslint:disable-next-line:no-unused-expression
                        this.loosers.push(item) : null;
                });
                this.loosers = this.loosers.filter((item: Financials) => item.change_pct < 0).slice(0, 10);

            })
        );
    }

    sortFinancials(data: Financials []) {
        return data.sort((a: Financials, b: Financials) => {
            return a.change_pct - b.change_pct;
        });
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(item => item.unsubscribe());
    }

}
