import Route from '@ember/routing/route';
import { messages } from '../data/messages';
import { sort } from '@ember/object/computed';

export default class ChatRoute extends Route {
  model() {
    let sortedMessages = messages.reverse();
    console.log(sortedMessages);

    let messagesToDisplay = [];

    for (let i = 0; i < sortedMessages.length-1; i++) {
      const timeDiff = (sortedMessages[i].timeStamp - sortedMessages[i+1].timeStamp) / 60 / 60 / 1000;
      if(timeDiff >= 24)
      {
        messagesToDisplay.push(sortedMessages[i]);
        let dateDivider = {date: new Date(sortedMessages[i].timeStamp).toDateString(), isDateDivider: true};
        messagesToDisplay.push(dateDivider);
      }
      else{
        messagesToDisplay.push(sortedMessages[i]);
      }
    }

    messagesToDisplay.push(sortedMessages[sortedMessages.length-1]);
    return messagesToDisplay;
  }
}
