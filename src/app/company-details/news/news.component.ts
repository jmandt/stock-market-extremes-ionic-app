import {Component, Input, OnInit} from '@angular/core';
import {NewsService} from '../../services/news/news.service';
import {News} from '../../models/models';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  @Input() isin: string | undefined;
  news: any = {value: []};

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getNewsByIsin(this.isin)
        .subscribe( res => this.news = res);
  }

  get sortData() {
    return this.news.value.sort((a, b) => {
      // @ts-ignore
      return new Date(b.datePublished) as unknown as News - new Date(a.datePublished) as News;
    });
  }


}
