import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      var question = this.store.createRecord('question', {
        text: this.get('text'),
        author: this.get('author'),
        description: this.get('description'),
        date: new Date(),
        numberOfAnswers: 0
      });
      question.save();

      this.set('text', '');
      this.set('author', '');
      this.set('description', '');

      this.transitionToRoute('questions');
    }
  }
});
