import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TwdServiceProvider } from '../../providers/twd-service/twd-service';
import { Session } from '../../providers/session/session';
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
  user: User;

  constructor(public navCtrl: NavController, public twdService: TwdServiceProvider, public session: Session) {
    //this.getAll();
  }

  /*getAll() {
    this.twdService.load()
      .then(data => {
        this.obj = data;
        this.result = this.obj._embedded.episodes;
      });
  }

  getDetail(id:number){
    this.navCtrl.push("DetailsPage", {
      id: id
    })
  }

  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }*/

  createSession() {
    this.user = new User();
    //disparando a sessão
    this.session.create(this.user);
    
  } 

}