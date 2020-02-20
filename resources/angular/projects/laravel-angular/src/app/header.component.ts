import { Component, OnInit, OnChanges,  } from '@angular/core';
import { AuthService } from './auth/auth-services/auth.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  appName = 'AFRO-HELVETIC CHARITY';
  constructor(private auth: AuthService) { }
  isUser: boolean;
  authSubscriber: Subscription;
  isMenuCollapsed = false;
  ngOnInit() {
    this.authSubscriber = this.auth.logedIn.subscribe(r => this.isUser = r);
  }
  logOut() {
    this.toggleCollapse();
    this.auth.logout();
  }
  toggleCollapse(collapse = false) {
    this.isMenuCollapsed = collapse;
  }
}
