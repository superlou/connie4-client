import Component from '@glimmer/component';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { service } from '@ember/service';

export default class LogInOut extends Component {
  @service session;

  @action
  invalidateSession() {
    this.session.invalidate();
  }

  @action
  async logIn() {
    const BACKEND_API = 'http://localhost:8000';
    const response = await fetch(BACKEND_API + '/login/google?web=true');
    const result = await response.json();
    window.location.assign(result.url);
  }

  <template>
    {{#if this.session.isAuthenticated}}
      <button type="button" {{on "click" this.invalidateSession}}>Log Out</button>
    {{else}}
      <button type="button" {{on "click" this.logIn}}>Log In</button>
    {{/if}}
  </template>
}
