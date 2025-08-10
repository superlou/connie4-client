import Controller from '@ember/controller';

export default class AuthController extends Controller {
  queryParams = ['code'];
  code = '';
}
