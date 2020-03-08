import {Component, Input, OnInit} from '@angular/core';
import {FinancialsService} from '../../../services/financials/financials.service';

@Component({
  selector: 'app-financials',
  templateUrl: './financials.component.html',
  styleUrls: ['./financials.component.scss'],
})
export class FinancialsComponent implements OnInit {
  @Input() symbol: string | undefined;

  financials: any;

  constructor(private finService: FinancialsService) { }

  ngOnInit() {
    console.log(this.symbol)
    this.finService.getFinancialsBySymbol(this.symbol).subscribe(
        res => {
          this.financials = res[0];
          console.log(this.financials);
        }
    );
  }

}
