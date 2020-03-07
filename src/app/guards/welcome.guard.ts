import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Storage} from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})
export class WelcomeGuard implements CanActivate {

    constructor(private storage: Storage,
                private router: Router,
    ) {
    }

    async canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Promise<boolean> {
        const isComplete = await this.storage.get('welcomeComplete');
        if (!isComplete) {
            this.router.navigateByUrl('welcome');
        }
        return isComplete;
    }

}
