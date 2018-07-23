import { Component, ElementRef, HostBinding, Inject, OnDestroy, Renderer2, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { Subscription } from 'rxjs';

import { AppLayoutConfigService } from './layout/layout.service';
import { SidebarService } from './layout/sidebar/sidebar.service';
import { navigation } from './layout/navigation/navigation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnDestroy {
  title = 'app';
  public isFetching = false;

  appSettings: any;
  navigation: any;
  onConfigChanged: Subscription;

  @HostBinding('attr.app-layout-mode') layoutMode;

  constructor(
    private _renderer: Renderer2,
    private _elementRef: ElementRef,
    private appLayoutConfig: AppLayoutConfigService,
    private platform: Platform,
    private sidebarService: SidebarService,
    @Inject(DOCUMENT) private document: any
  ) {
    this.onConfigChanged =
    this.appLayoutConfig.onConfigChanged
        .subscribe(
            (newSettings) => {
                this.appSettings = newSettings;
                this.layoutMode = this.appSettings.layout.mode;
            }
        );

    if (this.platform.ANDROID || this.platform.IOS) {
        this.document.body.className += ' is-mobile';
    }

    this.navigation = navigation;
  }

  ngOnDestroy() {
      this.onConfigChanged.unsubscribe();
  }

  addClass(className: string) {
      this._renderer.addClass(this._elementRef.nativeElement, className);
  }

  removeClass(className: string) {
      this._renderer.removeClass(this._elementRef.nativeElement, className);
  }
}
