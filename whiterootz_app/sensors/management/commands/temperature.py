from django.core.management.base import BaseCommand, CommandError
from sensors.models import Sensor
from w1thermsensor import W1ThermSensor
import time

sensor = W1ThermSensor()

class Command(BaseCommand):
    help = 'Gives current temperature'

    def handle(self, *args, **options):
        temperature = sensor.get_temperature()
        Sensor.objects.create(sensor_name="temp sensor 1",
                              sensor_type="temperature",
                              value=temperature)
