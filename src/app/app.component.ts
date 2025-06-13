import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {

  constructor(
    private readonly platform: Platform
  ) { }

  ngOnInit(): void {
    this.initializeApp()
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.setOverlaysWebView({ overlay: false })
      StatusBar.setStyle({ style: Style.Dark })
    })
  }
}
