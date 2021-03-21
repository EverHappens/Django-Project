from django.db import models

class Game(models.Model):
    name = models.CharField(max_length=30)
    description = models.TextField()
    link = models.CharField(max_length=30)

    def __str__(self):
        return self.name
# Create your models here.
