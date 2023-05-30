import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2 } from '@angular/core';
import { RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _selectedTheme = '';
  renderer: Renderer2;
  dark = new BehaviorSubject<boolean>(false);
  isDark = this.dark.subscribe((value: boolean) => {
    return value;
  });
  constructor(
    private rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }
  toggleDark() {
    const hasClass = this.document.body.classList.contains('dark-theme');
    if (hasClass) {
      this.dark.next(false);
      // console.log(this.dark);
      this.renderer.removeClass(this.document.body, 'dark-theme');
      this.setSelectedTheme('light');
    } else {
      this.dark.next(true);
      // console.log(this.dark);
      this.renderer.addClass(this.document.body, 'dark-theme');
      this.setSelectedTheme('dark-theme');
    }
  }

  setPreviousTheme() {
    const hasClass = this.document.body.classList.contains('dark-theme');
    let theme = this.getTheme();
    if (theme == 'light') {
      this.dark.next(false);
      // console.log(this.dark);
      this.renderer.removeClass(this.document.body, 'dark-theme');
    } else {
      this.dark.next(true);
      this.renderer.addClass(this.document.body, 'dark-theme');
      this.setSelectedTheme('dark-theme');
    }
  }

  setSelectedTheme(theme: string) {
    this._selectedTheme = theme;
    localStorage.setItem('theme', theme);
  }

  getTheme() {
    return localStorage.getItem('theme') || 'light';
  }
}
