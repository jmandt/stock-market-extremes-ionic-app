import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';


@Injectable({
    providedIn: 'root'
})
export class CompanyService {

    constructor(private db: AngularFirestore) {
    }

    get_all_companies() {
        return this.db.collection('company_info').valueChanges();
    }

    getCompanyInfo(isin: string){
        return this.db.collection('company_info',
                ref => ref.where('isin', '==', isin)).valueChanges();
    }

    getIsinFromSymbol(symbol: string) {
       return this.db.collection('company_info').doc(symbol).valueChanges();
    }

}
