import Ember from 'ember';

export default Ember.ObjectController.extend({

  isEditing: false,
  actions: {
    editQuestion: function() {
    this.set('isEditing', true);
    },

    saveQuestion: function() {
      this.get('model').save();
      this.set('isEditing',false);
    },

    deleteQuestion: function() {
      if (confirm('Are you sure?')) {

        var answers = this.get('answers'),
          list = answers.toArray();

          list.forEach(function(answer) {
          answer.destroyRecord();
          answers.removeObject(answer);
        });

        this.get('model').destroyRecord();
        this.transitionToRoute('questions');
      }
    },

   addAnswer: function () {
     this.get('newAnswer') ? this.set('newAnswer', false) : this.set('newAnswer', true);
   },

   submitAnswer: function() {
     var question = this.get('model');
     var answer = this.store.createRecord('answer', {
       poster: this.get('poster'),
       body: this.get('body'),
       date: new Date()
     });
     answer.save().then(function() {
       question.get('answers').pushObject(answer);
       question.save();
     });

     var numberOfAnswers = question.get('numberOfAnswers') + 1;
     question.set('numberOfAnswers', numberOfAnswers).save();

     this.set('newAnswer', false);

     this.setProperties({
       poster: "",
       body:   "",
     });

     this.transitionToRoute('question', question.id);
   },

    deleteAnswer: function(answer) {

     if (confirm('Are you sure?')){
       answer.destroyRecord();
       var question = this.get('model');
       question.get('answers').removeObject(answer);
       question.save();
       answer.deleteRecord();
       answer.save();
       this.transitionToRoute('question', this.get('id'));
     }
   }
  }
});
