import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private localNotifications: LocalNotifications,private platform:Platform) {
    this.platform.ready().then(() => {
      this.localNotifications.requestPermission().then(e => {
        this.notif()
      }).catch(er => alert(er));
    });


  }
  notif()
  {
    this.localNotifications.schedule({
      text: 'Delayed ILocalNotification',
      led: 'FF0000',
      trigger: { at: new Date(new Date().getTime() + 10000) },
      sound: null
    });
  }
}
