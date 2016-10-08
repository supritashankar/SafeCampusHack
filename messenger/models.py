from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Inputs(models.Model):
	full_name = models.CharField(max_length=30)
	school = models.CharField(max_length = 30)
	email_id = models.EmailField(max_length = 20)
	password = models.CharField(max_length = 15)
	dateofbirth = models.DateField(max_length = 8)
	MALE = 0
	FEMALE = 1
	GENDER_CHOICES = [(MALE, 'Male'), (FEMALE, 'Female')]
	gender = models.IntegerField(choices=GENDER_CHOICES)	
	facebook = models.CharField(max_length = 30)
	score = models.IntegerField(default=1)

