import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
declare var n:any
declare var $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authservice: AuthService,
  ) { }

  ngOnInit(): void {
    setTimeout(function(){
      $('.button-menu-mobile').click(function(){
        $('body').toggleClass('sidebar-enable');
      });
      $('.right-bar-toggle').click(function(){
        $('body').toggleClass('right-bar-enabled');
      });
    }, 100);
   }

  async onLogout() {
    return this.authservice.afterLogout();
  }

}
