from django.conf.urls import url 
from django.http import HttpResponse 

from django.template import engines
from django.template.loader import render_to_string


DEBUG = True 
SECRET_KEY = 'blehbleh'

ROOT_URLCONF = __name__
TEMPLATES = [{'BACKEND': 'django.template.backends.django.DjangoTemplates'},]

def home(request):
	title = 'Sloth App'
	author = 'Sloth'
	html = '''
			<!doctype html>
			<html lang="en">
			<head>
			  <meta charset="utf-8">
			  <meta name="viewport" content="width=device-width, initial-scale=1">
			  <title>The Best Most Rotten of Tomatoes</title>

			  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
			  <link rel="stylesheet" href="tinyapp_styles.css">

			  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
			  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

			  <!--- Javascript --> 
			 <script>

			  $(function() {
			  	var steps = {
			  	1: "Almost Erudite, Just Moderate Level of Trash",
			  	2: "Increasingly Challenging Levels of Trash",
			  	3: "Worrisomely Trashy, Will Need To Read A Book Later",
			  	4: "What The Fuck, Why Would You Want That",
			  	5: "Bottom Of The Barrel, Are You At Home In Your Underwear?"
			  	}; 

			    $( "#slider" )

			     .slider({
			      value:1,
			      min: 1,
			      max: 5,
			      step: 1,
			      slide: function( event, ui ) {
			        $( "#amount" ).val( steps[ui.value] );
			      }
			    });
			    $( "#amount" ).val($( "#slider" ).slider("values"));

			    var selection = $( "#slider" ).slider("values");

			  } );

			  function notification() {
			  	alert("Form was submitted");
			  }

			 </script>
			</head>
			<body>

			<div id="wrapper">
			  <div id="header">
			  Yes, I would like some trash for my brain
			  </div>
			  <div id="left-sidebar"></div>
			  <div id="content">
			    <div id="inner-content">
			    	<h1> How trashy do you want it? </h1>

			    <form method=post action="/" onsubmit="notification()"> 
			    	<input type="hidden" name="slider">
			    	<div id="slider" </div>
			    	<br>
			    	<label for = "amount"/>
			        <input type="text" id = "amount" readonly id = "amount" class="input_res">
			        <br>
			        <br>
			        <input type="text" testvalue="testvalue" /> 
			        <br> 
			        <br>
			        <input type="submit" value="OKAY" class="form-submit-button">
			    </form> 
			    </div>
			  </div>
			  <div id="right-sidebar"></div>
			  <div id="footer"></div>
			</div>
			</body>
			</html>

			'''

	return HttpResponse(html)

def resultreturn(request):

	return HttpResponse(html)


urlpatterns = [
	url(r'^$', home),
	url(r'^$', resultreturn)
	] 

##django-admin runserver --pythonpath=. --settings=tinyapp




