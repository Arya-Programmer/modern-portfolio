from django.db import models

# Create your models here.


class Experience(models.Model):
    company = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    period = models.CharField(max_length=100)
    description = models.TextField()
    logo = models.ImageField(upload_to="experience_images/", blank=True, null=True)
