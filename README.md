# Fraction.less Boilerplate

*Current version: 3.0.0-beta1*

Fraction.less is an HTML/CSS quick-start kit to get your website or app front-end up and running quickly. It's HTML5 ready, utilizes backwards compatible CSS3, comes with a bunch of useful and common JavaScript functionality, and it has LESS and SASS support if you want it.

__Why use it?__

Unlike most other frameworks, you'll spend most of your time building on top of Fraction.less rather than undoing the defaults. Also, unlike some other frameworks, sites built using Fraction.less won't *look* like they were built using Fraction.less. The framework gives you a great set of minimal defaults and allows you to build sites that are your own without having to unravel a lot of complicated, hard to customize code.

## Features

* Common styles for
	* Site-wide color scheme
	* Forms
	* Responsive grid
	* Helper classes (think image replacement, hidden elements, etc.)
	* Helpful LESS and SASS mixins
	* Media query starting points
	* Comprehensive CSS reset thanks to Normalize.css
	* Optimized print styles
	* Baseline typographic grid
* Common JavaScript functions (accordions, tabs, etc.)
	* The latest jQuery
* HTML5 starting point
* Icon font (latest Font-Awesome)
* Various optimizations and goodies (robots.txt, humans.txt, .htaccess, crossdomain policy, etc.)

## Components

Fraction.less Boilerplate uses code from the following projects:

* jQuery 1.9.1
* Normalize.css CSS 'reset'
* LESS support
* SASS support
* Parsley.js for client side form validation
* Vanity JS for common JS effects
* Test Suite references original projects within the Usage document

# Usage

Setup is pretty easy and Fraction.less comes with some tools to help you test your development environment.

## Initial Setup

1. Download and extract the files to where you want to start developing or do a
    git clone git://github.com/billpatrianakos/Fractionless-Boilerplate.git

2. Set your favorite LESS or SASS compiler to watch the project folder (or use `less.js` client side)

3. Open up the folder in your favorite editor and start editing!

## The Grid

The Fraction.less grid is based on the 1140 Grid System. It works out of the box but you have the option of being able to change the widths of each class by modifying a few LESS variables.

### Grid Usage

Basically, its like creating a layout with tables except without any tables. Your `<body>` is the canvas on which you create your grid.

1. `.container` - This contains your rows and columns. Parts of your page like the header, main content, and footer lend themselves well to being containers. No content goes in the `.container` - only `.rows` do. This class spans the width of the browser window.

2. `.row` - This is is the holder for your columns. Again, no content goes in them, only your columns. You can place as many rows as you want within your `.container`. This class spans 1140px by default or any width you define in `.grid.less` or `grid.scss` and is always centered in the browser window.

3. The `.one` through `.twelve` classes are your columns. That's where your content goes. The grid supports twelve columns. The elements in your `.row` should add up to 12 with the last column in your `.row` having a `.last` class.

__Example:__

```html
<section class="container">
	<div class="row">
		<div class="three">
			<p>My three column content</p>
		</div>

		<div class="two">
			<p>My two column content</p>
		</div>

		<div class="four">
			<p>My four column content</p>
		</div>

		<div class="three last">
			<p>My last column, which spans 3 columns and is the last in the row which adds up to 12</p>
		</div>
	</div>
</section>
```

The important things to notice here is that the column class names should **always** add up to 12 and that the very last column in a row needs to have the `.last` class added to it or the last element will fail to float properly. For those who have never seen an element with multiple classes, don't worry. It is perfectly acceptible to have multiple classes on the same HTML element. In fact, you can have as many as you want separated by spaces. It is not invalid markup at all. That said, its generally not a good idea to have elements with multiple classes everywhere unless its absolutely necessary. Best practices dictate only one class per element but it is not at all uncommon to see multiple classes per element. Just don't go crazy with this if this is a new concept to you.

## Legacy support

Users of verion 1.0 will remember the `.full-width`, `.left`, `.right`, and column classes named after fractions. Those are gone and replaced with the new class names. If you've been using verion 1 please update your grid and restructure your HTML to align with the new grid (it really isn't that hard, I had to do it a few times myself - it just requires a quick find and replace and the addition of the `.row` element). The new grid is far more reliable, easy, and gives you a *working* responsive design. The `.left` and `.right` classes still remain but are now part of the `mixins` file and used to quickly float an element left or right.

### style.less and style.scss

This file imports all of the styles besides your custom styles. The order of imports in these files is very important as each file may depend on variables or mixins defined in the previous file. Add your styles below the first set of imports (as indicated in the file) but not before the last set of imports for print and mobile styles.

If using a compiler, you only need to compile the `style.*` file as your compiler should import and compile all included files into a single `style.css` file. If you're using plain CSS it's best to avoid all the `@import` statements and copy and paste each file into `style.css` manually to avoid too many HTTP requests slowing down your site.

__Using LESS without a compiler__

Fraction.less includes `less.js` for those who want to save compiling for later or want a quick way to experiment with Less. If you don't know much about LESS and want Fraction.less to work out of the box, just uncomment the line in the `index.html` file that has a `<link>` to the `less.js` file. This will solve most problems all three types of people above may have. *Please don't use `less.js` in production. On a live website it forces you to rely on JavaScript browser support AND slows page load times on many levels.*

#### Less.app

Fraction.less no longer includes [Less.app](http://incident57.com/less/). Less.app is great but this is a design framework and I'm trying to focus the project more. You can find a LESS compiler on your own (I use [CodeKit](http://incident57.com/codekit/) by the same developer as Less.app. It's great!). On Linux I use the Node package which is installed via NPM. But like I said, just Google around. LESS compilers are not hard to come by. Here are some good ones:

* [Less.app](http://incident57.com/less/) (Mac only)
* [CodeKit](http://incident57.com/codekit/) (Mac only)
* [Crunch](http://crunchapp.net/) (Win/Mac)
* [SimpleLESS](http://wearekiss.com/simpless) (Win/Mac/Linux)
* [Less Parser](http://www.proving-ground.be/less/) (Windows only - Basically a cloned version of LESS.app for Windows with permission from the original creator of LESS.app)

### Usage Notes

Take heed of the following as there are some components of the boilerplate that need a bit of extra attention to work correctly.

_.htaccess Files_ - Fraction.less comes with a file named `bootstrap.htaccess`. On most systems hidden files are not shown in the GUI file explorers like Finder or Windows Explorer. This means that if you download Fraction.less and try to copy and paste its contents to another folder you'll most likely not get the `.gitignore` and `.htaccess` file along with the rest of the files. To ensure this important file gets included in that situation we've named it so it isn't a dot-file. For it to work correctly in production you must rename it to simply `.htaccess`.

### Credits

I have to give credit where credit is due. Thanks to all these folks who are by far much smarter and more talented that I, and whose projects I've used extensively in the creation of Fraction.less.

* [Paul Irish and the HTML5 Boilerplate team](http://html5boilerplate.com) - HTML5 Boilerplate
* [@andytlr](http://cssgrid.net) - 1140 Grid System
* [Alex Sellier](http://lesscss.org) - LESS dynamic stylesheet language
* [Bryan Jones](http://incident57.com/less/) - LESS.app and CodeKit (Mac only)
* [Enavu](http://vanity.enavu.com/) - Vanity JS common jQuery plugin starter kit

... and many more I know I'm forgetting.

# Development

If you see a better way to do something or see errors in the code please feel free to submit a pull request. I'd even be flattered if you forked this and created a better overall product or something specific to your own needs.

If you plan to contribute, please keep these guidelines in mind:

* Make your changes in a new branch and push that instead. Name the branch "contrib-" followed by a short description of the change like: `contrib-rgba-mixin-update`
* The `development` branch is now deprecated. `develop` is now the branch where all new changes are tested and worked on. The entire branching strategy has also changed in version 2.0.3 - see below for more on this.
* If you must merge your changes, merge into the `develop` branch only.

## Branching Strategy

Fraction.less uses a pretty standard branching strategy with a master, develop, and feature branches. You should start all new work in a feature branch (contributors should use the naming convention described above). Feature branches are then tested by themselves and merged into the `develop` branch. From there, they are finally merged into master only when all bugs are fixed and the new code is polished. As of version 2.0.3 master will never be worked in directly. Changes will alawys trickle up from feature branches to develop and finally to master. Master is always the most recent stable version and develop is the bleeding edge complete version. All other branches are to be considered unsafe and care should be taken before using them as a starting point for any project.

# License

Fraction.less Boilerplate is licensed under the BSD license. See the License.md file for details. This means you can use it however and wherever you want. You don't have to release any derivatives as open source and you are free to charge money for derived works. That's why I didn't go with the GPL. I'm not very fond of the GPL to say the least.

# Roadmap

The following features will be implemented in upcoming releases:

* Better SASS support
* Build scripts and optimizers

Contributors and suggetions welcome! bill-at-chooseclever-dot-com if you need to reach me but I'd much prefer it if you just created an issue or files a pull request in most cases. I'm very very happy to include others' contributions.

# Troubleshooting

## Grunt Tasks

__Grunt Server Task Fails on OS X with "too many open files" error__ - This error has been traced to having a low `ulimit` set. If you get this error try the following:

1. Run `ulimit -n` in the terminal. The limit may say something like "256". This is an issue. To adjust this setting run `ulimit -n 1024` and then `ulimit -n` to make sure your change was accepted. *Note that for some reason Mavericks only allows you to change the ulimit value once per terminal session. If you find the number you chose was too small and the error persists, open the directory in a new terminal window or tab and run `ulimit -n XXX` again.* Suggested values for `ulimit` in this case are 1024, 2048, or 4096. Error messages may persist but the watch task will work.

2. An alternative solution is to update node and/or grunt. I use nvm (like rvm but for node) and I have several node versions on my machine. Try upgrading to the latest stable node to eliminate these errors.

3. You may also try downgrading Grunt to v0.4.2.

If any of these solutions do not work please open a ticket and be sure to include your OS and version, the node version you're running, your ulimit value, and the steps you took to try to resolve the problem. If you are missing any of these I will respond with a link to this section of the readme.
