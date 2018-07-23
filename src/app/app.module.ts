import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { FakeDbService } from './fake-db/fake-db.service';
import { SharedModule } from './shared/modules/shared.module';
import { MainModule } from './shared/modules/main.module';
import { appLayoutConfig } from './layout/layout.config';

import { NavbarModule } from './layout/navbar/navbar.module';
import { SidebarModule } from './layout/sidebar/sidebar.module';
import { FooterModule } from './layout/footer/footer.module';
import { ToolbarModule } from './layout/toolbar/toolbar.module';
import { ContentModule } from './content/content.module';
import { AppLayoutConfigService } from './layout/layout.service';
import { AppStoreModule } from './store/store.module';

import { MatProgressBarModule } from '@angular/material';
import { LayoutModule } from './layout/layout.module';

const appRoutes: Routes = [
  {
      path      : '**',
      redirectTo: ''
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(FakeDbService, {
      delay             : 0,
      passThruUnknownUrl: true
    }),

    SharedModule,
    MainModule.forRoot(appLayoutConfig),
    MatProgressBarModule,
    LayoutModule,
    AppStoreModule,
    ContentModule
   ],
  providers: [
    AppLayoutConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
