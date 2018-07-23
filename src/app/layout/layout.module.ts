import { NgModule } from '@angular/core';
import { ToolbarModule } from './toolbar/toolbar.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './footer/footer.module';
import { NavigationModule } from './navigation/navigation.module';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
    imports: [
        ToolbarModule,
        SidebarModule,
        FooterModule,
        NavigationModule,
        NavbarModule
    ],
    exports: [
        ToolbarModule,
        SidebarModule,
        FooterModule,
        NavigationModule,
        NavbarModule
    ]
})

export class LayoutModule { }
