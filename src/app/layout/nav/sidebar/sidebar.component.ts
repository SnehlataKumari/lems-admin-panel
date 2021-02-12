import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
declare var $:any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router,
    private api: ApiService,
    private authservice: AuthService,
    private alertService: AlertService) { }

  accessToken = localStorage.getItem('access_token');
  user = localStorage.getItem('user');

  ngOnInit(): void {
    setTimeout(function(){ 
      $(".pcoded-hasmenu > a").on("click",function(e){
        if($(this).parent('.pcoded-hasmenu').hasClass('pcoded-trigger')){
          $(".pcoded-hasmenu").removeClass('pcoded-trigger active'); 
          $('.pcoded-hasmenu ul.pcoded-submenu').hide();
        }else{
          $(".pcoded-hasmenu").removeClass('pcoded-trigger');
          $('.pcoded-hasmenu ul.pcoded-submenu').hide();
          $(this).parent('.pcoded-hasmenu').addClass('pcoded-trigger active');
          $(this).parent('.pcoded-hasmenu').children('ul.pcoded-submenu').slideDown();
        }
      });
      if($('#dashboardPage').length > 0){
        $('.sidebar-menu li').removeClass('active-link');
        $('#dashboardNav').addClass('active-link');
      }
      if($('#testPage').length > 0){
        $('.sidebar-menu li').removeClass('active-link');
        $('#testmangNav').addClass('active-link');
        $('#testNav').addClass('active-link');
        $('#testNav').closest('.pcoded-hasmenu').addClass('pcoded-trigger active');
      }
      if($('#testreqPage').length > 0){
        $('.sidebar-menu li').removeClass('active-link');
        $('#testmangNav').addClass('active-link');
        $('#testreqNav').addClass('active-link');
        $('#testreqNav').closest('.pcoded-hasmenu').addClass('pcoded-trigger active');
      }
      if($('#importedPage').length > 0){
        $('.sidebar-menu li').removeClass('active-link');
        $('#testmangNav').addClass('active-link');
        $('#importedNav').addClass('active-link');
        $('#importedNav').closest('.pcoded-hasmenu').addClass('pcoded-trigger active');
      }
     

      if($('#candidatePage').length > 0){
        $('.sidebar-menu li').removeClass('active-link');
        $('#candidateNav').addClass('active-link');
        $('#ccandidateNav').addClass('active-link');
        $('#ccandidateNav').closest('.pcoded-hasmenu').addClass('pcoded-trigger active');
      }
      if($('#groupPage').length > 0){
        $('.sidebar-menu li').removeClass('active-link');
        $('#candidateNav').addClass('active-link');
        $('#groupNav').addClass('active-link');
        $('#groupNav').closest('.pcoded-hasmenu').addClass('pcoded-trigger active');
      }
      if($('#importpage').length > 0){
        $('.sidebar-menu li').removeClass('active-link');
        $('#candidateNav').addClass('active-link');
        $('#importNav').addClass('active-link');
        $('#importNav').closest('.pcoded-hasmenu').addClass('pcoded-trigger');
      }
      if($('#documentpage').length > 0){
        $('.sidebar-menu li').removeClass('active-link');
        $('#candidateNav').addClass('active-link');
        $('#documentNav').addClass('active-link');
        $('#documentNav').closest('.pcoded-hasmenu').addClass('pcoded-trigger');
      }

      if($('#addteacherPage').length > 0){
        $('.sidebar-menu li').removeClass('active-link');
        $('#teacherNav').addClass('active-link');
        $('#addteacherNav').addClass('active-link');
        $('#addteacherNav').closest('.pcoded-hasmenu').addClass('pcoded-trigger active');
      }
      if($('#registrationPage').length > 0){
        $('.sidebar-menu li').removeClass('active-link');
        $('#teacherNav').addClass('active-link');
        $('#regreqNav').addClass('active-link');
        $('#regreqNav').closest('.pcoded-hasmenu').addClass('pcoded-trigger active');
      }

      if($('#productPage').length > 0){
        $('.sidebar-menu li').removeClass('active-link');
        $('#productNav').addClass('active-link');
        $('#pproducNav').addClass('active-link');
        $('#pproducNav').closest('.pcoded-hasmenu').addClass('pcoded-trigger active');
      }
      if($('#livePage').length > 0){
        $('.sidebar-menu li').removeClass('active-link');
        $('#productNav').addClass('active-link');
        $('#liveNav').addClass('active-link');
        $('#liveNav').closest('.pcoded-hasmenu').addClass('pcoded-trigger active');
      }
      if($('#reportPage').length > 0){
        $('.sidebar-menu li').removeClass('active-link');
        $('#reportNav').addClass('active-link');
        $('#testrNav').addClass('active-link');
        $('#testrNav').closest('.pcoded-hasmenu').addClass('pcoded-trigger active');
      }
      if($('#salesPage').length > 0){
        $('.sidebar-menu li').removeClass('active-link');
        $('#reportNav').addClass('active-link');
        $('#salesrNav').addClass('active-link');
        $('#salesrNav').closest('.pcoded-hasmenu').addClass('pcoded-trigger active');
      }
      if($('#teacherPage').length > 0){
        $('.sidebar-menu li').removeClass('active-link');
        $('#reportNav').addClass('active-link');
        $('#teacherrNav').addClass('active-link');
        $('#teacherrNav').closest('.pcoded-hasmenu').addClass('pcoded-trigger active');
      }
      if($('#requestPage').length > 0){
        $('.sidebar-menu li').removeClass('active-link');
        $('#productNav').addClass('active-link');
        $('#requestNav').addClass('active-link');
        $('#requestNav').closest('.pcoded-hasmenu').addClass('pcoded-trigger');
      }
    }, 100);
    
  }
  async onLogout() {
    return this.authservice.afterLogout();
  }

}
