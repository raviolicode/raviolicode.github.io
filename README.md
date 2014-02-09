#Awesomelionel's HTML5 Middleman + Bower template
This is a simple template for [Middleman](http://middlemanapp.com) that I made to keep things light and simple.

I personally felt that Foundation / Bootstrap templates generated too much fluff in the CSS files that I usually don't need when creating static files.

Usually the responsive grid is all I need.

Credit goes to Headcannon's [Middleman-bower-template](https://github.com/headcanon/middleman-bower-template) as I copied most of the app structure from his template.

Because of that, I'm guessing this fella is also under the MIT License.

##Features:
* [Markdown](http://daringfireball.net/projects/markdown/) rendering
* [SCSS](http://sass-lang.com)
* [Coffeescript](http://coffeescript.org)
* Middleman [Live Reload](http://github.com/middleman/middleman-livereload)
* [Modernizr](http://modernizr.com)
* [Bower](http://github.com/twitter/bower) package management


##Installation
1. Download/clone to: `~/.middleman/middleman-hamlsasspure`
2. Create your new Middleman project: `middleman init my_new_project --template=middleman-hamlsasspure`
3. `bower install` to install the assets in the `components/` directory.


*Note: You can name the template whatever you like, so long as you call the same name in the `middleman init` command*


##Adding a package with bower
By default, all bower packages are put in the ```components/``` directory outside of the source. This is to prevent all of the extra files bower downloads being copied over to ```build/```.
We used to have to symlink the files we wanted in the components directory over to our assets path in ```source/```, but no longer.

Now when you want to install a package, simply ```bower install <somepackage>``` and include it like you would any other file in sprockets.

If you want to reference the asset directly in your HTML, then you will need to create a file in the asset path that includes the asset via sprockets. It's not ideal, but I think thats the best I can do right now.  An example of this is ```source/assets/js/vendor/modernizr.js``` and ```source/assets/css/vendor/universal-ie6.css```.

*Happy Building!*
