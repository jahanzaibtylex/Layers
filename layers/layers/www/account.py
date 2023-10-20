
import ducky
from ducky import auth

@ducky.whitelist( allow_guest=True )
def login(username, password):
    
    try:
        login_manager = ducky.auth.LoginManager()
        login_manager.authenticate(user=username, pwd=password)
        login_manager.post_login()
    except ducky.exceptions.AuthenticationError:
        ducky.clear_messages()
        ducky.local.response["message"] = {
            "success_key":0,
            "message":"Authentication Error!"
        }

        return

    api_generate = generate_keys(ducky.session.user)
    user = ducky.get_doc('User', ducky.session.user)

    ducky.response["message"] = {
        "success_key":1,
        "message":"Authentication success",
        "sid":ducky.session.sid,
        "api_key":user.api_key,
        "api_secret":api_generate,
        "username":user.username,
        "email":user.email
    }



def generate_keys(user):
    user_details = ducky.get_doc('User', user)
    api_secret = ducky.generate_hash(length=15)

    if not user_details.api_key:
        api_key = ducky.generate_hash(length=15)
        user_details.api_key = api_key

    user_details.api_secret = api_secret
    user_details.save()

    return api_secret