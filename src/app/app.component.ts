import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
  user: firebase.User;
  constructor(private auth: AuthService, private router: Router){
  }
  ngOnInit() {
    this.auth.getUserState().subscribe( user => {
      this.user = user;
    })
  }


  login(){
    this.router.navigate(['/login']);
  }

  logout(){
    this.auth.logout();
  }

  register(){
    this.router.navigate(['/register']);
  }
}
