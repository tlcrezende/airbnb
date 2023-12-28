import { Controller } from "@hotwired/stimulus"
import axios from 'axios';

// Connects to data-controller="users-by-emails"
export default class extends Controller {
  static targets = ['email', 'submit', 'textWarning'];

  connect() {
    this.submitTarget.addEventListener('click', (e) => {
      e.preventDefault();

      if(this.emailTarget.value === '') {
        console.log('email is blank')
        this.emailTarget.classList.add('invalid-inset-input-text-field');
        this.textWarningTarget.classList.remove('hidden');
      } else {
        axios.get('/api/users_by_emails', {
          params: {
            email: this.emailTarget.value
          },
          header: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }).then((response) => {
          Turbo.visit('/users/sign_in');
        }).catch((error) => {
          Turbo.visit('/users/sign_up');
        })
      }
    });
  }
}
