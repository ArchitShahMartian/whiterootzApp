from django.db import models


# Create your models here.
class Sensor(models.Model):
    sensor_name = models.CharField(max_length=50)
    sensor_type = models.CharField(max_length=50)
    updated_at = models.DateTimeField(auto_now=True)
    value = models.FloatField()
