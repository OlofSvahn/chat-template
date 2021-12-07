import Route from '@ember/routing/route';
import { messages } from '../data/messages';

export default class ChatRoute extends Route {
  model() {
    return messages;
  }
}
