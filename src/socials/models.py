from django.db import models

# Create your models here.


class Social(models.Model):
    name = models.CharField(max_length=100)
    link = models.CharField(max_length=255)
