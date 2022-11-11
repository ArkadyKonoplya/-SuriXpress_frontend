import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MdModule } from '../md/md.module';
import { MaterialModule } from 'src/app/app.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { ShipmentComponent } from './shipment.component';
import { ShipmentRoutes } from './shipment.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ShipmentRoutes),
        FormsModule,
        MdModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    declarations: [ShipmentComponent]
})

export class ShipmentModule {}

