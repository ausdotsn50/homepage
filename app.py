from flask import Flask, render_template
import time
import atexit
import requests
import os
from apscheduler.schedulers.background import BackgroundScheduler

app = Flask(__name__)

def keep_alive():
    """Ping the app itself to prevent it from sleeping"""
    try:
        # Get the app URL from environment variable (Render provides this)
        app_url = os.environ.get('RENDER_EXTERNAL_URL', 'http://localhost:5000')
        response = requests.get(f"{app_url}/health", timeout=30)
        print(f"Keep-alive ping: {response.status_code} at {time.strftime('%A, %d. %B %Y %I:%M:%S %p')}")
    except Exception as e:
        print(f"Keep-alive failed: {e} at {time.strftime('%A, %d. %B %Y %I:%M:%S %p')}")

# Health check endpoint for keep-alive pings
@app.route("/health")
def health_check():
    return {"status": "healthy", "timestamp": time.strftime("%A, %d. %B %Y %I:%M:%S %p")}, 200

scheduler = BackgroundScheduler()
scheduler.add_job(func=keep_alive, trigger="interval", seconds=600) # Ping every 10 minutes
scheduler.start()

# Shut down the scheduler when exiting the app
atexit.register(lambda: scheduler.shutdown())

projects_data = [
    {
    "name": "UPV Mayhem",
    "description": "A catching game set in the context of UPV (University of the Philippines Visayas).",
    "repository": "https://github.com/adzalmazan1/CMSC11_FP"
    },

    {
    "name": "Jog Squad",
    "description": "A CLI program that essentially functions as a jogging tracker.",
    "repository": "https://github.com/adzalmazan1/CMSC21_FP"
    },

    {
    "name": "Malware Invasion",
    "description": "A reimagination of the classic game — Space Impact.",
    "repository": "https://github.com/adzalmazan1/CMSC12_FP"
    },

    {
    "name": "Promotional Video",
    "description": "A promotional video project edit for Circulo Matematica; academic year 2021 - 2022.",
    "repository": "https://www.facebook.com/watch/?v=967237003983206"
    },

    {
    "name": "Cancabato Bay",
    "description": "An entry to the online map exhibit From Islands to Insights: Mapping the Philippines.",
    "repository": "https://www.facebook.com/photo?fbid=122126927864642976&set=pcb.122126925656642976"
    },

    {
    "name": "BIO 265",
    "description": "A commissioned map for BIO 265 course research.",
    "repository": "https://drive.google.com/drive/folders/1cyWaFJa8VZG12r35aU_1y1Fye6ATLQml?usp=drive_link"
    },

    {
    "name": "Alzar",
    "description": "A CS50x Final Project: iOS-based POS software specifically designed for water refilling station businesses.",
    "repository": "https://github.com/ausdotsn50/alzar"
    },

    {
    "name": "AiGRI",
    "description": "APRU Tech Policy Hackathon 2025 Deliverable: Leveraging drone data and AI to make agricultural insurance more efficient and accessible for smallholder farmers.",
    "repository": "https://github.com/ProjectAiGRI"
    },
]

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/projects")
def projects():
    return render_template("projects.html", projects_data=projects_data)

# To add POST method
@app.route("/contact")
def contact():
    return render_template("contact.html")
