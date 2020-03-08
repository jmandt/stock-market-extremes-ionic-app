import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import {environment} from '../environments/environment';
import {IonicStorageModule} from '@ionic/storage';
import {WelcomePageModule} from './pages/welcome/welcome.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule,
        IonicModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
        AppRoutingModule,
        IonicStorageModule.forRoot(),
        WelcomePageModule,
        SharedModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
