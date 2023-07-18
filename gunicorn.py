"""Command to start gunicorn
Note : Run from the django project i.e. whiterootz_app/
source /home/archit0994/misc/gitwork/whiterootzApp/venv/bin/activate && gunicorn -c /home/archit0994/misc/gitwork/whiterootzApp/gunicorn.py whiterootz_app.wsgi

"""

command = '/home/archit0994/misc/gitwork/whiterootzApp/venv/bin/gunicorn'
pythonpath = '/home/archit0994/misc/gitwork/whiterootzApp/whiterootz_app'
bind = '192.168.1.69:8000'
workers = 3
