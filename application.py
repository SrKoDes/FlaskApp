from flask import Flask, render_template, request, Response
import doer
import json

application = Flask(__name__)


@application.route('/')
def index():
    return render_template('index.html')

@application.route('/arena')
def arena():
    return render_template('arena.html')

@application.route("/player/info", methods=["GET"])
def get_player_info():
    print("Hello World")
    element = request.args.get('element')
    print(element)
    info = doer.get_player(element)
    # Return 404 if element not found
    if element is None:
        response = Response("{'error': 'Item Not Found - %s'}"  % element, status=404 , mimetype='application/json')
        return response

    # Return info
    response = Response(json.dumps(info), status=200, mimetype='application/json')
    return response

@application.route('/attack', methods=["PUT"])
def attack_enemy():
    pass


if __name__ == "__main__":
    application.run()