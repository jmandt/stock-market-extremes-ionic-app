import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FinancialsService {

  constructor(private db: AngularFirestore) {}

  getFinancialsBySymbol(symbol: string) {
    return this.db.collection('company_info').doc(symbol)
        .collection('realtime',  ref => ref.orderBy('last_trade_time', 'desc').limit(1)).valueChanges();
  }

  getWinners(limit: number) {
    return this.db.collectionGroup('realtime',
            ref => ref.where('change_pct', '>', 0)
                .orderBy('change_pct', 'desc').limit(limit)).valueChanges();
  }

  getLoosers(limit: number) {
    return this.db.collectionGroup('realtime',
        ref => ref.orderBy('change_pct', 'asc').limit(limit)).valueChanges();
  }

}
