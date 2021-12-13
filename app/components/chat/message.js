import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ChatMessageComponent extends Component {
  @tracked time = '';

  @action
  formatDateToTime(date) {
    this.time = new Date(date).toTimeString().split(' ')[0].slice(0, 5);
    return this.time;
  }
}
