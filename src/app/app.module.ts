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


@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HomePageModule,
    TabsPageModule,
    ProfilePageModule,
    SharePageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
