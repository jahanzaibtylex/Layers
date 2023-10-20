
import ducky

def get_context(context):
    context.about_us_settings = ducky.get_doc('About Us Settings')
    return context
    