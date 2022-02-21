"""Define the urls for the sensors."""

from django.urls import path
from .views import device_state

urlpatterns = [
    path('device-state/', device_state, name="device_state")
]