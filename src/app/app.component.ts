import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  dark: boolean;
  constructor(private theme: ThemeService) {}
  ngAfterViewInit(): void {
    window.setTimeout(() => {
      const ul = document.querySelector('.goog-te-gadget');
      if (ul) {
        while (ul.childNodes.length > 1) {
          ul.removeChild(ul.lastChild);
        }
      }
    }, 80);
  }
  ngOnInit() {
    this.theme.setPreviousTheme();
    if (localStorage.getItem('theme') == 'light') {
      this.dark = false;
    } else {
      this.dark = true;
    }
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
