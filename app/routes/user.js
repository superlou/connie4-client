import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class UserRoute extends Route {
  @service session;

  beforeModel(transition) {
    // todo Why the fuck is it not authenticated ever?
    // this.session.requireAuthentication(transition, 'index');
  }
}
