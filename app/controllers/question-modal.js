import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    save: function() {
      var question = this.store.createRecord('question', {
        text: this.get('text'),
        author: this.get('author'),
        description: this.get('description')
      });
      question.save();

      this.set('question', '');
      this.set('author', '');
      this.set('description', '');


      this.transitionToRoute('questions');
    }
  }
});
