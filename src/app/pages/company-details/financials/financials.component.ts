import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FinancialsService} from '../../../services/financials/financials.service';
import {Financials} from '../../../models/models';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-financials',
    templateUrl: './financials.component.html',
    styleUrls: ['./financials.component.scss'],
})
export class FinancialsComponent implements OnInit, OnDestroy {
    @Input() symbol: string | undefined;

    financials: Financials;

    subscriptions: Subscription [] = [];


    constructor(private finService: FinancialsService) {
    }

    ngOnInit() {
        this.subscriptions.push(
            this.finService.getFinancialsBySymbol(this.symbol).subscribe(
                (res: Financials []) => this.financials = res[0]
            ));
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(item => item.unsubscribe());
    }
}
