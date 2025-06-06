import { Routes } from '@angular/router';
import { GuestHomeComponent } from './@layouts/guest/pages/guest-home/guest-home.component';
import { GuestLayoutComponent } from './@layouts/guest/guest-layout/guest-layout.component';
import { GuestProductPageComponent } from './@layouts/guest/pages/guest-product-page/guest-product-page.component';

export const routes: Routes = [
  {
    path: '', component: GuestLayoutComponent, children: [
      { path: '', component: GuestHomeComponent, pathMatch: "full" },
      { path: ':name/:id', component: GuestProductPageComponent}
    ]
  }

  //research what authentication tokens i can use in this routes.ts file
  //like that I can easily do if(!businessUser) redirect to everything guest related

];
