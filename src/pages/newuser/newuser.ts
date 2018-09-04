import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { User } from '../../models/user';
import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the NewuserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newuser',
  templateUrl: 'newuser.html',
})
export class NewuserPage {

  user: User = new User(); //{ name: '', birthDate: new Date, email: '', cpf: '', password: '' };

  cpf = '';
  DECIMAL_SEPARATOR = ".";
  GROUP_SEPARATOR = ",";
  pureResult: any;
  maskedId: any;
  val: any;
  v: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public restProvider: RestProvider, public alertCtrl: AlertController) {

    if (this.navParams.data.id) {
      this.restProvider.getUser(this.navParams.data.id)
        .then((result: any) => {
          this.user = result;
          this.user.cpf = this.format(this.user.cpf );
        })
    }
    else {
      this.user = new User();
      this.user.status = true;
      this.user.gender = "F";
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewuserPage');
  }

  saveUser() {
    this.user.cpf = this.unFormat(this.user.cpf );
    this.restProvider.saveUser(this.user).then((result) => {
      console.log(result);
      this.showAlert('Sucesso', 'Registro salvo com sucesso!');
      this.navCtrl.push(HomePage);
    }, (err) => {
      console.log(err);
      this.showAlert('Erro', 'Ocorreu um erro ao realizar sua operação.');
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

  format(valString) {
    if (!valString) {
      return '';
    }
    let val = valString.toString();
    const parts = this.unFormat(val).split(this.DECIMAL_SEPARATOR);
    this.pureResult = parts;
    if (parts[0].length <= 11) {
      this.maskedId = this.cpf_mask(parts[0]);
      return this.maskedId;
    }
  };

  unFormat(val) {
    if (!val) {
      return '';
    }
    val = val.replace(/\D/g, '');

    if (this.GROUP_SEPARATOR === ',') {
      return val.replace(/,/g, '');
    } else {
      return val.replace(/\./g, '');
    }
  };

  cpf_mask(v) {
    v = v.replace(/\D/g, ''); //Remove tudo o que não é dígito
    v = v.replace(/(\d{3})(\d)/, '$1.$2'); //Coloca um ponto entre o terceiro e o quarto dígitos
    v = v.replace(/(\d{3})(\d)/, '$1.$2'); //Coloca um ponto entre o terceiro e o quarto dígitos
    //de novo (para o segundo bloco de números)
    v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); //Coloca um hífen entre o terceiro e o quarto dígitos
    return v;
  }

}
