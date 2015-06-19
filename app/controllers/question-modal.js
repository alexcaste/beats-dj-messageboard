import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      var question = this.store.createRecord('question', {
        text: this.get('text'),
        author: this.get('author'),
        description: this.get('description')
      });
      debugger;
      question.save();

      this.set('question', '');
      this.set('author', '');
      this.set('description', '');


      this.transitionToRoute('questions');
    }
  }
});
