import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ChatInputComponent extends Component {
  @tracked isCollapsed = false;

  @action
  showCollapse() {
    $('.collapse').collapse('show');
    this.isCollapsed = false;
    console.log(this.isCollapsed);
  }
  @action
  hideCollapse() {
    $('.collapse').collapse('hide');
    this.isCollapsed = true;
    console.log(this.isCollapsed);
  }
}
