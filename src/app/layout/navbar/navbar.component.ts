import { Component, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { SidebarService } from '../sidebar/sidebar.service';

import { navigation } from '../navigation/navigation';
import { NavigationService } from '../navigation/navigation.service';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  @Input() layout;
  navigation: any;

  constructor(
    private sidebarService: SidebarService,
    private navigationService: NavigationService,
    private router: Router
  ) {
    // Navigation data
    this.navigation = navigation;

    // Default layout
    this.layout = 'vertical';
  }

  ngOnInit() {
    this.router.events.subscribe(
      (event) => {
        if (event instanceof NavigationEnd) {
            if (this.sidebarService.getSidebar('navbar')) {
                this.sidebarService.getSidebar('navbar').close();
            }
        }
      });
  }

  toggleSidebarOpened() {
    this.sidebarService.getSidebar('navbar').toggleOpen();
  }

  toggleSidebarFolded() {
    this.sidebarService.getSidebar('navbar').toggleFold();
  }
}
