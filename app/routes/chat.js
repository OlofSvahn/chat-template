import Route from '@ember/routing/route';
import { messages } from '../data/messages';

export default class ChatRoute extends Route {
  model() {
    let messagesToDisplay = [];
    for (let i = 0; i < messages.length-1; i++) {
      const timeDiff = (messages[i+1].timeStamp - messages[i].timeStamp) / 60 / 60 / 1000;
      console.log(timeDiff);
      if(timeDiff >= 24)
      {
        messagesToDisplay.push(messages[i]);
        let dateDivider = {date: new Date(messages[i+1].timeStamp).toDateString(), isDateDivider: true};
        messagesToDisplay.push(dateDivider);
      }
      else{
        messagesToDisplay.push(messages[i]);
      }
    }
    messagesToDisplay.push(messages[messages.length-1]);
    console.log(messagesToDisplay);
    console.log(messages);
    return messagesToDisplay;
  }
}
