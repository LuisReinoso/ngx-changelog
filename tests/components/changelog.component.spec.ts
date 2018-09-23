import { ChangelogComponent } from '../../src/ngx-changelog';

import { TestBed, ComponentFixture, async } from '@angular/core/testing';

describe('Component: ChangelogComponent', () => {

    let fixture: ComponentFixture<ChangelogComponent>;
    let comp: ChangelogComponent;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [],
            declarations: [ChangelogComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(ChangelogComponent);
        comp = fixture.componentInstance;
    });

    // it('should render the sum', (() => {
    //     fixture.detectChanges();

    //     expect(fixture.debugElement.nativeElement.textContent).toContain('887');
    // }));

});
