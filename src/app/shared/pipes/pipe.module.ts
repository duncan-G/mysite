import { NgModule } from '@angular/core';

import { GetByIdPipe } from './getById.pipe';

@NgModule({
    declarations: [
        GetByIdPipe,
    ],
    imports     : [],
    exports     : [
        GetByIdPipe
    ]
})
export class PipesModule { }
