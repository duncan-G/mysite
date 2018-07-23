import { Component, HostBinding, HostListener, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppLayoutConfigService } from '../../../layout.service';

@Component({
  selector: 'app-nav-horizontal-collapse',
  templateUrl: './nav-horizontal-collapse.component.html',
  styleUrls: ['./nav-horizontal-collapse.component.scss']
})
export class NavHorizontalCollapseComponent implements OnDestroy {

  onConfigChanged: Subscription;
  appSettings: any;
  isOpen = false;

  @HostBinding('class') classes = 'nav-item nav-collapse';
  @Input() item: any;

  @HostListener('mouseenter')
  open() {
      this.isOpen = true;
  }

  @HostListener('mouseleave')
  close() {
      this.isOpen = false;
  }

  constructor(
    private appLayoutConfig: AppLayoutConfigService
  ) {
    this.onConfigChanged =
    this.appLayoutConfig.onConfigChanged
        .subscribe(
            (newSettings) => {
                this.appSettings = newSettings;
            }
        );
  }

  ngOnDestroy() {
      this.onConfigChanged.unsubscribe();
  }

}
