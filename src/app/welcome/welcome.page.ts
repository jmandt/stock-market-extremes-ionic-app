import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  activeSlide = 'first';

  constructor(private router: Router, private storage: Storage) { }

  ngOnInit() {
  }

  getStarted() {
    this.storage.set('welcomeComplete', true)
    this.router.navigateByUrl('/tabs/winners');
  }

  next() {
    this.activeSlide = 'second';
  }
}
