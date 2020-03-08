import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';


@Injectable({
    providedIn: 'root'
})
export class NewsService {


    constructor(private db: AngularFirestore) {
    }

    getNewsByIsin(isin: string) {
        return this.db.collection('news').doc(isin).valueChanges();
    }

    getArticleByName(articleName: string) {
        return this.db.collectionGroup('news',
            ref => ref.where('name', '==', articleName)).valueChanges();
    }

    getNewsByIsinInSubcollection(isin: string) {
        return this.db.collectionGroup('news',
            ref => ref
                .where('isin', '==', isin)
                .orderBy('datePublished', 'desc')
                .limit(10))
            .valueChanges();
    }
}
