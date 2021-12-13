import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
    beforeModel(/* transition */) {
        this.transitionTo('chat'); // Implicitly aborts the on-going transition.
      }
}
