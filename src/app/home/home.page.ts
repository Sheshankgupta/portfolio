import { Component, HostListener } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
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
}
