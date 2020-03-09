import {Component, OnDestroy, OnInit} from '@angular/core';
import {FinancialsService} from '../../services/financials/financials.service';
import {Financials} from '../../models/models';
import {Subscription} from 'rxjs';


@Component({
    selector: 'app-winners',
    templateUrl: 'winners.page.html',
    styleUrls: ['winners.page.scss']
})
export class WinnersPage implements OnInit, OnDestroy {

    winners: Financials [] = [];
    subscriptions: Subscription [] = [];

    constructor(private finService: FinancialsService) {
    }

    ngOnInit() {
        this.subscriptions.push(
            this.finService.getWinners(10).subscribe((res: Financials []) => {
                this.winners = [];
                this.sortFinancials(res).forEach((item: Financials) => {
                    this.winners.filter((winner: Financials) => winner.symbol === item.symbol).length === 0 ?
                        // tslint:disable-next-line:no-unused-expression
                        this.winners.push(item) : null;
                });
                this.winners = this.winners.filter((item: Financials) => item.change_pct > 0).slice(0, 10);
            })
        );
    }

    sortFinancials(data: Financials []) {
        return data.sort((a: Financials, b: Financials) => {
            return b.change_pct - a.change_pct;
        });
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(item => item.unsubscribe());
    }

}
