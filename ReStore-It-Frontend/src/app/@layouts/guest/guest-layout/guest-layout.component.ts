import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../../components/@core/sidebar/sidebar.component';
import { FooterComponent } from '../../../components/@core/footer/footer.component';
import { HeaderComponent } from '../../../components/@core/header/header.component';

@Component({
  selector: 'app-guest-layout',
  imports: [RouterOutlet, SidebarComponent, FooterComponent, HeaderComponent],
  templateUrl: './guest-layout.component.html',
  styleUrl: './guest-layout.component.css'
})
export class GuestLayoutComponent {

}
