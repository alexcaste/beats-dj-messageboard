import DS from 'ember-data';

export default DS.Model.extend({
  poster: DS.attr(),
  body: DS.attr(),
  question: DS.belongsTo('question', {async: true})

});
