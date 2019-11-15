

from django import forms 

class SelectionForm(forms.Form)
	testvalue = forms.CharField(max_length = 100)
	amount = forms.CharField(max_length = 255)
	value = forms.IntField(max_length = 3)

def selectionrequest(request):

	if request.method == "POST":
		#get posted form 
		mySelectionForm = SelectionForm(request.POST)

		if mySelectionForm.is_valid(): 
			testvalue = mySelectionForm.cleaned_data['testvalue']

	else: 
		myLoginForm = Loginform() 

	return render(request, 'resultreturn.html', {"amount" : amount})
	

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
    $( "#amount" ).val($("#slider").slider("values"));
  } );



    	<form action="/selection_submitted/" method="post">






          {% extends 'blog/base.html' %}

		  {% block content %}
				<h2> New Post </h2>
				<form method="POST" class="selectionForm"> {% csrf_token %}
					{{ form.as_p }}
					<button type="submit" class="save btn btn-default">Submit</button>
		   </form>
		  {% endblock %}



from django import forms 
from django.db import models

class SelectForm(forms.Form):
	selection = forms.CharField(label='selection')

class Selection(models.Model):
    numeric_value = models.IntegerField(max_length=10)
    description = models.CharField(max_length=50)

class SelectionForm(forms.ModelForm):
	class Meta: 
		model = Selection
		fields = ('numeric_value', 'description',)

def selection_new(request):
	selection = SelectionForm()
	return render(request, 'tinyapp.py', {'form': form})









