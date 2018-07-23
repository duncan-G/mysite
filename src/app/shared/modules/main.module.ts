import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { LAYOUT_CONFIG, AppLayoutConfigService } from '../../layout/layout.service';
import { MatchMediaService } from '../services/match-media.service';
import { NavigationService } from '../../layout/navigation/navigation.service';
import { MatSidenavHelperService } from '../services/mat-sidenav-helper.service';

@NgModule({
    providers      : [
        AppLayoutConfigService,
        MatchMediaService,
        NavigationService,
        MatSidenavHelperService,
    ]
})
export class MainModule {
    constructor(@Optional() @SkipSelf() parentModule: MainModule) {
        if (parentModule) {
            throw new Error('MainModule is already loaded. Import it in the AppModule only!');
        }
    }

    static forRoot(config): ModuleWithProviders {
        return {
            ngModule : MainModule,
            providers: [
                {
                    provide : LAYOUT_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
