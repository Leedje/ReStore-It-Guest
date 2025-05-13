import { Routes } from '@angular/router';
import { GuestHomeComponent } from './@layouts/guest/pages/guest-home/guest-home.component';
import { BusinessLayoutComponent } from './@layouts/business/business-layout/business-layout.component';
import { GuestLayoutComponent } from './@layouts/guest/guest-layout/guest-layout.component';
import { GuestProductPageComponent } from './@layouts/guest/pages/guest-product-page/guest-product-page.component';
import { UserRegistrationComponent } from './@layouts/business/pages/User/user-registration/user-registration.component';
import { UserLoginComponent } from './@layouts/business/pages/User/user-login/user-login.component';

export const routes: Routes = [
  {
    path: 'business', component: BusinessLayoutComponent, children:
      [
        { path: "register", component: UserRegistrationComponent},
        { path: "login", component: UserLoginComponent}]
  },

  {
    path: '', component: GuestLayoutComponent, children: [
      { path: '', component: GuestHomeComponent, pathMatch: "full" },
      { path: ':name/:id', component: GuestProductPageComponent} //idk if i want a different product details layout...
    ]
  }

  //research what authentication tokens i can use in this routes.ts file
  //like that I can easily do if(!businessUser) redirect to everything guest related

];
