from django import forms 
from models import Post 

from django.db import models

class Selection(models.Model):
    numeric_value = models.IntegerField(max_length=10)
    description = models.CharField(max_length=50)


class SelectionForm(forms.ModelForm):

	class Meta: 
		model = Selection
		fields = ('numeric_value', 'description',)

