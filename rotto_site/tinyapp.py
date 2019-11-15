from django.conf.urls import url 
from django.http import HttpResponse 
from django.shortcuts import render

from django.template import engines
from django.template.loader import render_to_string


DEBUG = True 
SECRET_KEY = 'blehbleh'

ROOT_URLCONF = __name__
TEMPLATES = [{'BACKEND': 'django.template.backends.django.DjangoTemplates'},]

def home(request):
	return render(request, '/rotto_site/templates/home.html')

def resultreturn(request):
	return render(request, '/rotto_site/templates/resultreturn.html')


urlpatterns = [
	url(r'^$', home),
	url(r'^$', resultreturn)
	] 

##django-admin runserver --pythonpath=. --settings=tinyapp




