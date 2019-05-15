import fb_auth_token

#host = ""
host = "https://api.gotinder.com"

fb_username = "forprojects@inbox.ru"
fb_password = "dusty95dre@mPass"

fb_access_token = fb_auth_token.get_fb_access_token(fb_username, fb_password)
fb_user_id = fb_auth_token.get_fb_id(fb_access_token)


#host = 'https://api.gotinder.com'
#tinder_token = "Your tinder token goes here"


#leave tinder_token empty if you don't use phone verification

# Your real config file should simply be named "config.py"
# Just insert your fb_username and fb_password in string format
# and the fb_auth_token.py module will do the rest!