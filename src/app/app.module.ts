import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePageModule } from './../pages/home/home.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { SharePageModule } from "../pages/share/share.module";
import { TabsPageModule } from '../pages/tabs/tabs.module';

import { Camera } from "@ionic-native/camera";
import { Geolocation } from "@ionic-native/geolocation";
import { NativeGeocoder } from '@ionic-native/native-geocoder';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { ENV } from '../environments/environment';
import { StorageProvider } from '../providers/storage';

@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    HomePageModule,
    TabsPageModule,
    ProfilePageModule,
    SharePageModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(ENV),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Camera,
    NativeGeocoder,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    StorageProvider
  ]
})
export class AppModule {}
