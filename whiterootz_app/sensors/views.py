from django.shortcuts import render
from django.http import JsonResponse


# Create your views here.
def device_state(request):
    return JsonResponse(dict([('data', '===yes===')]))
