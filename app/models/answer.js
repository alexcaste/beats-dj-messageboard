import DS from 'ember-data';

export default DS.Model.extend({
  poster: DS.attr('string'),
  body: DS.attr('string'),
  date: DS.attr('date'),
  question: DS.belongsTo('question', {async: true})

});
