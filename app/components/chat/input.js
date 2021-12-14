import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ChatInputComponent extends Component {
  @tracked isCollapsed = false;

  @action
  showCollapse() {
    $('.collapse.input').collapse('show');
    this.isCollapsed = false;
    console.log(this.isCollapsed);
  }
  @action
  hideCollapse() {
    $('.collapse.input').collapse('hide');
    this.isCollapsed = true;
    console.log(this.isCollapsed);
  }
  @action
  openModal(){
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  }
  @action
  closeModal(){
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
}
