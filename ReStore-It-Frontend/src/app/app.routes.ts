import { Routes } from '@angular/router';
import { GuestHomeComponent } from './@layouts/guest/pages/guest-home/guest-home.component';
import { GuestLayoutComponent } from './@layouts/guest/guest-layout/guest-layout.component';
import { GuestProductPageComponent } from './@layouts/guest/pages/guest-product-page/guest-product-page.component';
import { ChatListComponent } from './@layouts/guest/pages/chat-list/chat-list.component';
import { ChatComponent } from './@layouts/guest/pages/chat/chat.component';
import { ViewOrderComponent } from './@layouts/guest/pages/Order/view-order/view-order.component';
import { CheckoutOrderComponent } from './@layouts/guest/pages/Order/checkout-order/checkout-order.component';
import { OrderPlacedComponent } from './@layouts/guest/pages/Order/order-placed/order-placed.component';

export const routes: Routes = [
  {
    path: '', component: GuestLayoutComponent, children: [
      { path: '', component: GuestHomeComponent, pathMatch: "prefix"},
      { path: ':name/:id', component: GuestProductPageComponent},
      { path: 'chat', component: ChatListComponent},
      { path: 'chat/:chatRoomId', component: ChatComponent},
      { path: 'order', component: ViewOrderComponent},
      { path: 'checkout', component: CheckoutOrderComponent},
      { path: 'order-placed',  component: OrderPlacedComponent}
    ]
  }

];
