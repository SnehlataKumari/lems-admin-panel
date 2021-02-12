import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { LoggedInService } from './services/logged-in.service';

const routes: Routes = [
  {
    path: '',
    canActivate: [LoggedInService],
    loadChildren: () =>
      import('./shared/shared.module').then((mod) => mod.SharedModule),
  },
  {
    path: 'home',
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./layout/dashboard/dashboard.module').then(
        (mod) => mod.DashboardModule
      ),
  },

  {
    path: 'candidate',
    loadChildren: () =>
      import('./layout/candidate/candidate.module').then(
        (mod) => mod.CandidateModule
      ),
  },

  {
    path: 'teacher',
    loadChildren: () =>
      import('./layout/teacher/teacher.module').then(
        (mod) => mod.TeacherModule
      ),
  },

  {
    path: 'student',
    loadChildren: () =>
      import('./layout/student/student.module').then(
        (mod) => mod.StudentModule
      ),
  },

  {
    path: 'product',
    loadChildren: () =>
      import('./layout/product/product.module').then(
        (mod) => mod.ProductModule
      ),
  },

  {
    path: 'live-class',
    loadChildren: () =>
      import('./layout/live-classes/live-classes.module').then(
        (mod) => mod.LiveClassesModule
      ),
  },

  {
    path: 'report',
    loadChildren: () =>
      import('./layout/reports/reports.module').then(
        (mod) => mod.ReportsModule
      ),
  },

  {
    path: 'settings',
    loadChildren: () =>
      import('./layout/settings/settings.module').then(
        (mod) => mod.SettingsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
