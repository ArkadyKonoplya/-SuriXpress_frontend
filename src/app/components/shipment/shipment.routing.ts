import { Routes } from '@angular/router';

import { ShipmentComponent } from './shipment.component';

export const ShipmentRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: 'shipment',
        component: ShipmentComponent
    }]
}
];
