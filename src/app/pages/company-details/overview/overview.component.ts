import {Component, Input, OnInit} from '@angular/core';
import {Company} from '../../../models/models';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  @Input() company: Company;

  sliderConfig = {
    slidesPerView: 0.6,
    centeredSlides: true
  };

  constructor() { }

  ngOnInit() {}

}
