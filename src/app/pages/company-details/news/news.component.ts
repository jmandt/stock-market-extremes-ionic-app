import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {NewsService} from '../../../services/news/news.service';
import {NewsArticle, NewsContext} from '../../../models/models';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit, OnDestroy {
  @Input() isin: string | undefined;
  news: NewsArticle [];

  subscriptions: Subscription [] = [];

  constructor(private newsService: NewsService,
              private router: Router) { }

  ngOnInit() {
    if (this.isin === 'DE0006062144') {
      this.subscriptions.push(
          this.newsService.getNewsByIsinInSubcollection(this.isin)
              .subscribe((res: NewsArticle []) => this.news = res)
      );
    } else {
      this.subscriptions.push(
          this.newsService.getNewsByIsin(this.isin)
              .subscribe( (res: NewsContext) => this.news = res.value)
      );
    }
  }

  get sortData() {
    return this.news.sort((a, b) => {
      // @ts-ignore
      return new Date(b.datePublished) - new Date(a.datePublished);
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(item => item.unsubscribe());
  }


  newsDetails(article: NewsArticle, $event) {
    console.log(encodeURI(article.name))
    this.router.navigateByUrl('company/' + this.isin + '/news/' + encodeURI(article.name));
    // $event.stopPropagation();
  }
}
