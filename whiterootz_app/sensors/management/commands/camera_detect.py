from django.core.management.base import BaseCommand, CommandError
import time
import cv2

class Command(BaseCommand):
    help = 'Detects camera'

    def handle(self, *args, **options):
        # Create a VideoCapture object.
        cap = cv2.VideoCapture(0)

        # Check if the camera is opened successfully.
        if not cap.isOpened():
            print("Error opening the camera.")
            return

        # Capture a frame from the camera.
        ret, frame = cap.read()

        # Check if the frame was captured successfully.
        if not ret:
            print("Error capturing the frame.")
            return

        # Wait for a key press.
        cv2.waitKey(0)

        # Release the camera.
        cap.release()
        if ret:
            print ("Frame captured: Camera detected and works successfully")
