from django.shortcuts import render
from django.http import JsonResponse
from sensors.models import Sensor
import subprocess
import sys
# sys.path.insert(1, '/home/pi/misc/gitwork/whiterootz/sensors/')
# from fan import device_turn_off_on


# Create your views here.
def device_state(request):
    if dict(request.GET.items())['Humidifier'] == 'true':
        value = 0
    else:
        value = 1
    # try:
    #     device_turn_off_on(12, value)
    # except Exception as e:
    #     print("e=", e)
    return JsonResponse(dict([('data', '===yes===')]))


def get_temperature(request):
    last_value = Sensor.objects.last()
    print("last_value=", last_value.value)
    return JsonResponse(dict([('value', last_value.value),
                              ('last_updated', last_value.updated_at)]))
