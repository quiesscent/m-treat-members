from django.contrib.auth.models import AbstractUser 
from django.db import models

class CustomUser (AbstractUser ):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=150, unique=True)
    number = models.IntegerField(unique=True) 
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username','number']

    class Meta:
        verbose_name_plural ='Users'

    def __str__(self):
        return self.emailyour
