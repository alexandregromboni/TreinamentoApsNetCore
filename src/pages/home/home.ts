import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { NewuserPage } from '../../pages/newuser/newuser';
import { User } from '../../models/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public obj: any;
  public result: any;

  descending: boolean = false;
  order: number;
  column: string = 'name';
  users: any;
  searchText: string = null;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
    public restProvider: RestProvider) {
    this.getUsers();
  }

  getUsers() {
    this.restProvider.getUsers()
      .then(data => {
        this.users = data;
        console.log(this.users);
      });
  }

  addNewUser() {
    this.navCtrl.push(NewuserPage);
  }

  editUser(id: number) {
    this.navCtrl.push(NewuserPage, { id: id });
  }

  removeUser(user: User) {
    this.restProvider.remove(user.id)
      .then(() => {
        // Removendo do array de usuários
        var index = this.users.indexOf(user);
        this.users.splice(index, 1);
        this.showAlert('Sucesso', 'Registro excluído com sucesso!');
      });
  }

  filterUsers(ev: any) {
    this.restProvider.getUsersByName(this.searchText)
      .then(data => {
        this.users = data;
        console.log(this.users);
      });
  }

  showAlert(title, message) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

}