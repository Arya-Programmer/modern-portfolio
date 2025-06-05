from django.db import models


class Tag(models.Model):
    name = models.CharField(max_length=30, unique=True)

    def __str__(self):
        return self.name


class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(
        upload_to="project_images/", blank=True, null=True)
    tags = models.ManyToManyField(Tag, blank=True)
    liveUrl = models.URLField(blank=True)
    githubUrl = models.URLField(blank=True)

    def __str__(self):
        return self.title
