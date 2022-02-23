"""Command to start gunicorn

source /home/pi/misc/gitwork/whiterootzApp/venv/bin/activate && gunicorn -c gunicorn.py whiterootz_app.wsgi

"""

command = '/home/pi/misc/gitwork/whiterootzApp/venv/bin/gunicorn'
pythonpath = '/home/pi/misc/gitwork/whiterootzApp/whiterootz_app'
bind = '192.168.1.219:8000'
workers = 3
