import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from './../../auth/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Output() onCloseSideNav = new EventEmitter<void>()
  isAuth = false;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.authChanged.subscribe(authChanged => {
      this.isAuth = authChanged;
    })
  }
  onCloseSideNavbar() {
    this.onCloseSideNav.emit();
  }

  onLogout() {
    this.authService.logout();
  }
}
