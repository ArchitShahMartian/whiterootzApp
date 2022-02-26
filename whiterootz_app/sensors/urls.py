"""Define the urls for the sensors."""

from django.urls import path
from sensors.views import device_state, get_temperature

urlpatterns = [
    path('device-state/', device_state, name="device_state"),
    path('get-temperature/', get_temperature, name="get_temperature")
]
