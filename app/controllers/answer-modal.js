import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['question'],
  actions: {
    save: function() {
      var newAnswer = this.store.createRecord('answer', {
        poster: this.get('poster'),
        text: this.get('text')
      });
      newAnswer.save();

      var question = this.get('controllers.question.model');
      question.get('answers').pushObject(newAnswer);

      question.save();

      this.set('poster', '');
      this.set('text', '');


      this.transitionToRoute('question', question.id);
    }
  }
});
