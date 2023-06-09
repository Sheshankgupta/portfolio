import { Component, ElementRef, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: any;
      };
      googleTranslateElementInit: () => void;
    };
  }
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  dark: boolean;
  menuType: string = 'overlay';
  translateElement: HTMLDivElement;
  constructor(private theme: ThemeService) {}
  ngOnInit() {
    this.theme.setPreviousTheme();
    if (localStorage.getItem('theme') == 'light') {
      this.dark = false;
    } else {
      this.dark = true;
    }
    const menuButton = document.querySelector('ion-button#menuButton');
    console.log();
    if (menuButton) {
      this.translateElement = menuButton.querySelector(
        '#google_translate_element_wrapper'
      );
    }
    window.googleTranslateElementInit = () => {
      if (this.translateElement && window.innerWidth <= 768) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            autoDisplay: 'true',
            layout:
              window.google.translate.TranslateElement.FloatPosition.TOP_LEFT,
          },
          this.translateElement
        );
      } else {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            autoDisplay: 'true',
            layout:
              window.google.translate.TranslateElement.FloatPosition.TOP_LEFT,
          },
          'google_translate_element'
        );
      }
    };

    const script = document.createElement('script');
    script.src =
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(script);
  }
  toggleDark() {
    this.theme.toggleDark();
    if (this.dark) {
      this.dark = false;
    } else {
      this.dark = true;
    }
  }
}
