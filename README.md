# Beats-DJ-messageboard

This README outlines the details of collaborating on this Ember application.

A message board for DJ's written in Ember CLI.  

This app allows users to post questions and receive answers to those questions.  Questions and answers can be deleted.  Questions can be edited.  

This app uses the Cyborg Bootswatch.  

###This app is currently deployed at:

http://dj-messageboard.firebaseapp.com/

Note: there is a bug preventing chrome from loading the google font webpoet.  To view the site properly in chrome please click the shield in the upper right nad corner of the browser address bar and click "load unsafe scripts."  This issue of google determining its' own fonts as unsafe seems to be well known and well documented.  

Replace
  ./bower_components/bootstrap/dist/css/boostrap.css
and
  ./bower_components/bootstrap/dist/css/boostrap.min.css

with the bootstrap.css and bootstrap.min.css files found at https://bootswatch.com/cyborg/

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
