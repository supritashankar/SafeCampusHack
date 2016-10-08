from __future__ import unicode_literals

from django.db import models


class Profile(models.Model):
	full_name = models.CharField(max_length=30)
	school = models.CharField(max_length = 30)
	email = models.EmailField(max_length = 20)
	password = models.CharField(max_length = 15)
	date_of_birth = models.DateField(max_length = 8)
	GENDER_CHOICES = [(0, 'Male'), (1, 'Female')]
	gender = models.IntegerField(choices=GENDER_CHOICES)	
	facebook_uid = models.CharField(max_length = 30)
	score = models.IntegerField(default=1)

