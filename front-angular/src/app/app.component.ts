import { Component } from '@angular/core';
import { SessionService } from './session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-angular';

  formInfo = {
    username: '',
    password: ''
  };

  user: any;
  error: string;

  constructor(private session: SessionService) { }

  login() {
    this.session.login(this.formInfo)
      .then((user) => {
        if (user.error) {
          this.error = user.error
        } else {
          this.user = user
        }
      })
      .catch((err) => this.error = err)
  }

  signup() {
    this.session.signup(this.formInfo)
      .then((user) => this.user = user)
      .catch((err) => this.error = err)
  }

  logout() {
    this.formInfo = {
      username: '',
      password: ''
    };

    this.session.logout()
      .then((user) => this.user = undefined)
      .catch((err) => this.error = err)
  }
}
