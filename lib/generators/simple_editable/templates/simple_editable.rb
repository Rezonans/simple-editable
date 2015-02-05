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
