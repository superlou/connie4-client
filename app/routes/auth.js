import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class AuthRoute extends Route {
  @service session;
  @service router;

  async model(params, transition) {
    const code = params.code;

    const BACKEND_API = 'http://localhost:8000';
    const response = await fetch(
      BACKEND_API + "/auth/google?code=" + code + "&web=1",
    );
    const result = await response.json();
    await this.session.authenticate("authenticator:backend", result);
    this.router.transitionTo("events");
  }
}
