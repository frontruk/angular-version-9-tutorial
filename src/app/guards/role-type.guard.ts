import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class RoleTypeGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const userObject: User = JSON.parse(localStorage.getItem('user'));
      if(!userObject) return false;
      if(userObject.role !== 'master') {
        alert('You don/`t have permission');
        return false
      }; 
      return true;
  }
}
