import BaseAuthenticator from 'ember-simple-auth/authenticators/base';
import { action } from '@ember/object';

export default class BackendAuthenticator extends BaseAuthenticator {
  BACKEND_API = 'http://localhost:8000';

  async restore(data) {
    return data;
  }

  async authenticate(args) {
    return args;
  }
}
