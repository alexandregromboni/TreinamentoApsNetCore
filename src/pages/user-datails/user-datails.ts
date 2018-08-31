import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { Session } from './../../providers/session/session';
import { User } from '../../models/user';

/**
 * Generated class for the UserDatailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-datails',
  templateUrl: 'user-datails.html',
})
export class UserDatailsPage implements OnInit {
  

  public loggedUser: User;

  constructor(public session: Session, 
    public storage: Storage) {
  }

  //assim que o component existir capture a sseão do usuário
  ngOnInit() {
    this.session.get()
        .then(res => {
            this.loggedUser = new User(res);
            console.log('usuário logado  >>> ',this.loggedUser);
        });

        console.log(this.session.exist());

        this.session.remove();

        this.session.get()
        .then(res => {
            this.loggedUser = new User(res);
            console.log('USUARIO LOGADO  >>> ',this.loggedUser);
        });

        console.log(this.session.exist());
  }
  

}
