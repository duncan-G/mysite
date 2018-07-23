import { Component, OnInit } from '@angular/core';
import { AboutService } from './about.service';
import { AppLayoutConfigService } from '../../layout/layout.service';
import { sampleContent } from './about.sample-content';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    public sampleContent = sampleContent;

    constructor(
        private aboutService: AboutService,
        private appConfigServie: AppLayoutConfigService
    ) {
    }

    ngOnInit() {
    }
}
