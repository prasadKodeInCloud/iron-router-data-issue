#Iron-router data issue

This sample project is created on top of open source Void project to demonstrate the template rerendering issue when parsing data from iron router data hook to templates. Random numbers are added to each template to identify re-rendering when changing the routes.

In master branch data is parsed to the templates in router.js file. In the without-data branch data is not parsed to the templates.

##Master Branch

1. Run the meteor project with the source in default master branch.
2. Click on items link or content page link.
3. Observe that random number in header template is changed.


## Without-Data Branch
1. Checkout the without-data branch. ( git checkout without-data )
2. Click on items link or content page link.
3. Observe that random number in header template is not getting changed.


# Void



A starter boilerplate app template for [Meteor](http://meteor.com) using [IronRouter](https://github.com/EventedMind/iron-router).

Void is based on [Telescope](http://telesc.pe) (an open-source social news app) and is bought to you by the [Discover Meteor](https://www.discovermeteor.com) team. 

## Installation

If you already have Meteor and [Meteorite](https://github.com/oortcloud/meteorite/), Void is ready to go. Just clone it locally, run it with `mrt`, and start coding!

If not, here are the full instructions:

```
curl https://install.meteor.com | /bin/sh
npm install -g meteorite
git clone https://github.com/prasadKodeInCloud/iron-router-data-issue.git myApp
cd myApp
mrt
```

## Features

- Client-side routing
- Publications/subscriptions
- Basic permissions
- Common templates

## Principles

Void adopts a modular approach, where code is broken down in different files rather than all kept in one place. It also uses the “template/mapper” pattern, where the `item.html` template has a similarly named `item.js` JavaScript file that holds its helper code.

Void uses the `Items` collection as an example, but you would probably replace this with your own collection name (`Posts`, `Sales`, `Projects`, etc.) and change the file and variables names accordingly. 

## File Structure

- **client**
	- **CSS**
	- **helpers**
		- handlebars.js
		- router.js
	- **views**
		- **common**
			- footer.html
			- header.html
			- layout.html
			- loading.html
			- notFound.html
		- **items**
			- item.html
			- item.js
			- items.html
		- **pages**
			- homepage.html
	- main.html
	- main.js
- **collections**
	- items.js
- **lib**
	- helpers.js
	- permissions.js
- **packages**
	- iron-router
	- sample-package
- **public**
- **server**
	- fixtures.js
	- publications.js

## Other Boilerplates

- [meteor-boilerplate](https://github.com/matteodem/meteor-boilerplate) by matteodem
- [meteor-jw-opinionated-skeleton](https://github.com/jamesdwilson/meteor-jw-opinionated-skeleton) by jamesdwilson (CoffeeScript)
- [meteor-boilerplate](https://github.com/BeDifferential/meteor-boilerplate) by BeDifferential (CoffeeScript)
