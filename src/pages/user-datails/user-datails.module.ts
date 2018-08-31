import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserDatailsPage } from './user-datails';

@NgModule({
  declarations: [
    UserDatailsPage,
  ],
  imports: [
    IonicPageModule.forChild(UserDatailsPage),
  ],
})
export class UserDatailsPageModule {}
