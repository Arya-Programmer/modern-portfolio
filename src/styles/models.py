from django.db import models

# Create your models here.


class Style(models.Model):
    name = models.CharField(max_length=50, unique=True)
    data = models.JSONField()

    def __str__(self):
        return self.name
