from .django_base_settings import *

try:
    from .local import *  # noqa
except ImportError:
    print('Local settings not found')
