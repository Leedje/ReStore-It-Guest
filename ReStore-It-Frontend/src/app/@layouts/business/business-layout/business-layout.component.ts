import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../../components/@core/footer/footer.component';
import { SidebarComponent } from '../../../components/@core/sidebar/sidebar.component';

@Component({
  selector: 'app-business-home',
  imports: [RouterOutlet, SidebarComponent, FooterComponent],
  templateUrl: './business-layout.component.html',
  styleUrl: './business-layout.component.css'
})
export class BusinessLayoutComponent {

}
