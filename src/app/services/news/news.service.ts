import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class NewsService {


  constructor(private db: AngularFirestore) {}

  getNewsByIsin(isin: string) {
    return this.db.collection('news').doc(isin).valueChanges();
  }
}
