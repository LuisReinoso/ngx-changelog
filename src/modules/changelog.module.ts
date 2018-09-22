import { NgModule, ModuleWithProviders } from '@angular/core';
import { ChangelogComponent } from '../components/changelog.component';

@NgModule({
    declarations: [
        // Pipes.
        // Directives.
        // Components.
        ChangelogComponent
    ],
    exports: [
        // Pipes.
        // Directives.
        // Components.
        ChangelogComponent
    ]
})
// Consider registering providers using a forRoot() method
// when the module exports components, directives or pipes that require sharing the same providers instances.
// Consider registering providers also using a forChild() method
// when they requires new providers instances or different providers in child modules.
export class ChangelogModule {

    /**
     * Use in AppModule: new instance of SumService.
     */
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: ChangelogModule
        };
    }

    /**
     * Use in features modules with lazy loading: new instance of SumService.
     */
    public static forChild(): ModuleWithProviders {
        return {
            ngModule: ChangelogModule
        };
    }

}
