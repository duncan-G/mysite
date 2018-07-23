import { Directive, Input, OnInit, HostListener, OnDestroy, HostBinding, ElementRef } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { ObservableMedia } from '@angular/flex-layout';
import { Subscription, BehaviorSubject } from 'rxjs';

import { MatchMediaService } from '../services/match-media.service';
import { MatSidenavHelperService } from '../services/mat-sidenav-helper.service';

@Directive({
    selector: '[appMatSidenavHelper]'
})
export class MatSidenavHelperDirective implements OnInit, OnDestroy {
    matchMediaSubscription: Subscription;
    @HostBinding('class.mat-is-locked-open') isLockedOpen = true;
    @Input('appMatSidenavHelper') sidenavHelperId: string;
    @Input('mat-is-locked-open') matIsLockedOpenBreakpoint: string;

    constructor(
        private matSidenavService: MatSidenavHelperService,
        private matchMediaService: MatchMediaService,
        private observableMedia: ObservableMedia,
        private matSidenav: MatSidenav
    ) {
    }

    ngOnInit() {
        this.matSidenavService.setSidenav(this.sidenavHelperId, this.matSidenav);
        if (this.observableMedia.isActive(this.matIsLockedOpenBreakpoint)) {
            this.isLockedOpen = true;
            this.matSidenav.mode = 'side';
            this.matSidenav.toggle(true);
        } else {
            this.isLockedOpen = false;
            this.matSidenav.mode = 'over';
            this.matSidenav.toggle(false);
        }

        this.matchMediaSubscription = this.matchMediaService.onMediaChange.subscribe(() => {
            if (this.observableMedia.isActive(this.matIsLockedOpenBreakpoint)) {
                this.isLockedOpen = true;
                this.matSidenav.mode = 'side';
                this.matSidenav.toggle(true);
            } else {
                this.isLockedOpen = false;
                this.matSidenav.mode = 'over';
                this.matSidenav.toggle(false);
            }
        });
    }

    ngOnDestroy() {
        this.matchMediaSubscription.unsubscribe();
    }
}

@Directive({
    selector: '[appMatSidenavToggler]'
})
export class MatSidenavTogglerDirective {
    @Input('appMatSidenavToggler') sidenavTogglerId;

    constructor(private matSidenavService: MatSidenavHelperService) { }

    @HostListener('click')
    onClick() {
        this.matSidenavService.getSidenav(this.sidenavTogglerId).toggle();
    }
}
