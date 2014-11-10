# Fraction.less Boilerplate

> A collection of front-end code you can build up instead of tear down

Fraction.less Boilerplate is a front-end "boilerplate" that's meant to cut down on the time you spend writing the same code over and over. Its philosopy differs from frameworks like Bootstrap and Foundation in that it does not provide you with any styling out of the box beyond a few standard components. At the same time it goes a step further than other projects like HTML5 Boilerplate in that it provides you with a set of tools that can choose to use but are never forced to.

## Do we need another boilerplate/framework?

Yes and no. Fraction.less is different in that it aims to help you spend more time build __up__ a website rather than tearing down someone else's overly complex, unnecessary, or overly styled code. Unlike projects like Foundation and Bootstrap, a Fraction.less project doesn't have a certain "look" to it that you need to undo in order to design your site the way you want. But it's also not *just* a collection of boilerplate code either. It provides you a scaffold upon which you can be creative. Think of it this way: If Bootstrap is a template, Fraction.less is a blank canvas. If HTML5 Boilerplate is a blank canvas, then Fraction.less is the easel on which you can set it.

In short, rather than giving you a finished site that you need to tear apart and rewrite to look original, Fraction.less hands you a box full tools and components and its up to you to make something with them.

## Installation and Usage

### 0. Dependencies

We've chosen to use Bower to make it easy for you to manage dependencies. We deliberately got rid of the Grunt component because that would force too many users to modify (ie tear down) to build chain and add one too many dependencies for our taste. The project is structured in a way that allows you to easily use it as-is or add a Grunt or Gulp build chain after the fact.

* A recent version of Node - [check out NVM if you need to install Node](https://github.com/creationix/nvm#installation)
* Bower - Once you have Node run `npm install -g bower`

You can choose to forego this step but then you'll end up having to manually change up or remove the paths to some dependencies within your HTML.

### 1. Get the code

Grab a copy of Fraction.less with `git clone https://github.com/billpatrianakos/Fractionless-Boilerplate.git`

Now `cd` into the project and get it set up with `bower install`.

(__Pro tip:__ If you'd prefer to customize what gets installed open up `bower.json` and edit it. Be sure to remove any references to those components in your code)

### 2. Develop


