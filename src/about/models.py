from django.db import models

# Create your models here.


class Skill(models.Model):
    name = models.CharField(max_length=30, unique=True)

    def __str__(self):
        return self.name


class About(models.Model):
    name = models.CharField(max_length=50)
    occupation = models.CharField(max_length=100)
    bio = models.CharField(max_length=255)
    description = models.TextField()
    self_portrait = models.ImageField(
        upload_to="project_images/", blank=True, null=True
    )
    skills = models.ManyToManyField(Skill, blank=True)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    location = models.CharField(max_length=255)

    def __str__(self):
        return self.name + " " + self.occupation
