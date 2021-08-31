from flask import Flask, render_template
import doer
import json

app = Flask(__name__)

@app.route('/')
def index():
    return render_template(['index.html', 'script.js', 'style.css'])