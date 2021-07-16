import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs/Subscription'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() onSideNavToggle = new EventEmitter<void>();
  isAuth = false;
  authSubscription = new Subscription;

constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authSubscription = this.authService.authChanged.subscribe(authChange => {
      this.isAuth = authChange;
    })
  }
  onToggleSideNavBar() {
    this.onSideNavToggle.emit();
  }

  logOut() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
