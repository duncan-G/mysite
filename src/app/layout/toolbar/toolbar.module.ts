import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar.component';
import { MatIconModule, MatButtonModule, MatToolbarModule } from '@angular/material';
import { SharedModule } from '../../shared/modules/shared.module';

@NgModule({
    declarations: [
        ToolbarComponent
    ],
    imports: [
        SharedModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule
    ],
    exports: [
        ToolbarComponent
    ]
})

export class ToolbarModule { }
