import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements AfterViewInit {
  constructor() {}
  @ViewChild('content', { static: false }) content: IonContent;

  ngAfterViewInit() {}
  scrollToTop() {
    this.content.scrollToPoint(0, 0, 1000);
  }
}
