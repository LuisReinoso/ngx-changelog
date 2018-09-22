import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'cmp-changelog',
    templateUrl: './changelog.component.html',
    styleUrls: ['./changelog.component.scss']
})
export class ChangelogComponent implements OnInit {

    sum: number;

    constructor() { }

    ngOnInit(): void {
        this.sum = 887;
    }

}
