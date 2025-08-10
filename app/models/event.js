import Model, { attr } from '@ember-data/model';

export default class EventModel extends Model {
  @attr("string") name;
}
