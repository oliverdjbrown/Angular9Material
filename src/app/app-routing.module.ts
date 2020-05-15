import { NavbarComponent } from './navbar/navbar.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { BadgesComponent } from './badges/badges.component';
import { IconComponent } from './icon/icon.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { ButtonComponent } from './button/button.component';
import { TypographyComponent } from './typography/typography.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'typography', component: TypographyComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'button-toggle', component: ButtonToggleComponent },
  { path: 'icon', component: IconComponent },
  { path: 'badges', component: BadgesComponent },
  { path: 'progress-spinner', component: ProgressSpinnerComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: '**', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
