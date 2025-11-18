import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../../auth/components/auth.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  private userToken = localStorage.getItem('userToken');
  canActivate(): boolean {
    if (this.auth.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/auth/sign-in']);
      return false;
    }
    return true;
  }
}
