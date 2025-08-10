import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { computed } from '@ember/object';
import { service } from '@ember/service';

export default class ApplicationAdapter extends JSONAPIAdapter {
  @service session;

  host = 'http://localhost:8000';

  get headers() {
    let headers = {};

    if (this.session.isAuthenticated) {
      headers['Authorization'] = `Bearer ${this.session.data.authenticated.token}`
    }

    return headers;
  }
}
