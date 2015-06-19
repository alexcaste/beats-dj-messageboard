import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr(),
  author: DS.attr(),
  description: DS.attr(),
  answers: DS.hasMany('answer', {async: true})

});
