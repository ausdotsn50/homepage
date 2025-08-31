from flask import Flask, render_template

app = Flask(__name__)

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
    "repository": "https://github.com/ausdotsn50/CS50x_FP"
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