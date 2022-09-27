import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') signupForm: NgForm;
  defaultSubscription = 'Basic';
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  submitted = false;
  userData = {
    email: '',
    subscription: '',
    password: ''
  };

  onSubmit() {
    this.submitted = true;
    this.userData.email = this.signupForm.value.email;
    this.userData.subscription = this.signupForm.value.subscriptions;
    this.userData.password = this.signupForm.value.password;
    this.signupForm.reset();
  }
}
