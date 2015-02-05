[ckeditor]: https://github.com/galetahub/ckeditor

SimpleEditable
===========================
This gem allow you to edit simple html text and object fields inline, on click.

```ruby
# Gemfile

gem 'simple_editable', :git => 'git@github.com:Rezonans/simple-editable.git'
```
Install it with:

```bash
rails g simple_editable:install
```

Then run `rake db:migrate`

### Allow your views to use simple-editable helpers:

```ruby
class ApplicationController < ActionController::Base
  helper SimpleEditable::ApplicationHelper
end

```

Configuration
-------------
After installing you get initialize file: `config/initializers/simple_editable.rb`
Edit it according to your settings

```ruby
# This setting changes the method which Simple Editable calls
# (within the application helper) to return the user who can access to inline editing.
#
# If false set, it allow anybody to use it

SimpleEditable.admin_user = false

# Simple Editable will automatically call an authentication
# method in a before filter of all controller actions to
# ensure that there is a currently logged in admin user.
#
# This setting changes the method which Simple Editable calls
# within the application controller.
#
# If false set, authentication method will not be called

SimpleEditable.authentication_method = false
```

Now you can use it with two helpers
`inline_object` and `inline_text`

Examples of usage
-------------

```ruby
#inline_object(tag, object, attribute, options = {})
inline_object(:div, obj, :field, class: 'hello-class another-class')

#inline_text(tag, key, default_value, options = {})
inline_text(:div, 'pages.home.title', 'Hello World', class: 'hello-class another-class', position: 'right')

#Allowed values for :position in %w(left, right, top, bottom)

```

When you сlick on the appropriate tag, you can edit it, with html attribute `contenteditable = true` and when focus is lost, data will send and saved.

Customizing
-------------
You can change the default behavior of editing with editing file `app/assets/javascripts/simple_editable/init.js` which generates on installing gem.

Also you can use any wysiwyg editor, which has the ability to apply editor inline (on tags with `contenteditable = true`).

One of them is [CKEditor][ckeditor]. Just install it by documentation. Inline Editing is enabled directly in it on HTML elements through the HTML5 contenteditable attribute.
