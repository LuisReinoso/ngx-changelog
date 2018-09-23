import { Component, Input } from '@angular/core';
import { IChangelog } from '../models/changelog.interface';

@Component({
  selector: 'cmp-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.scss']
})
export class ChangelogComponent {
  @Input()
  changelog: IChangelog[];

  constructor() {
    this.changelog = [];
  }
}
