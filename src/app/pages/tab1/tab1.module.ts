import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { ListasComponent } from '../../components/listas/listas.component';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        ComponentsModule,
        FormsModule,
        ExploreContainerComponentModule,
        Tab1PageRoutingModule,
    ],
    declarations: [Tab1Page],
})
export class Tab1PageModule {}
