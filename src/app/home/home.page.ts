import { Component, HostListener, ViewChild } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('content', { static: false }) content: IonContent;
  dark = false;
  isDark = this.themeService.dark.subscribe((value: boolean) => {
    this.dark = value;
    return value;
  });
  constructor(private themeService: ThemeService) {}
  ionViewWillEnter() {
    var theme = this.themeService.getTheme();
    if (theme == 'light') {
      this.dark = false;
    } else {
      this.dark = true;
    }
  }

  // ----------------------- carousel experience -----------------------
  // activeStep = 0;

  // steps = [
  //   { step: 1, done: false },
  //   { step: 2, done: false },
  //   { step: 3, done: false },
  //   { step: 4, done: false },
  //   { step: 5, done: false },
  //   // { step: 3, done: false },
  // ];

  // articles = [
  //   { index: 0, class: 'active' },
  //   { index: 1, class: 'active_p_1' },
  //   { index: 2, class: 'active_p_2' },
  //   { index: 3, class: 'active_p_2' },
  //   { index: 4, class: 'active_p_2' },
  //   // { index: 2, class: 'active_p_2' },
  // ];

  // selectStep(step: number) {
  //   this.activeStep = step - 1;
  //   this.steps.forEach((s, index) => {
  //     if (index < this.activeStep) {
  //       s.done = true;
  //     } else if (index === this.activeStep) {
  //       s.done = false;
  //     } else {
  //       s.done = false;
  //     }
  //   });

  //   this.articles.forEach((article, index) => {
  //     if (index < this.activeStep - 1) {
  //       article.class = 'active_m_2';
  //     } else if (index > this.activeStep + 1) {
  //       article.class = 'active_p_2';
  //     } else if (index < this.activeStep) {
  //       article.class = 'active_m_1';
  //     } else if (index > this.activeStep) {
  //       article.class = 'active_p_1';
  //     } else {
  //       article.class = 'active';
  //     }
  //   });
  // }

  //-------------------------------------------------------
  scrollToTop() {
    this.content.scrollToPoint(0, 0, 1000);
  }
}
