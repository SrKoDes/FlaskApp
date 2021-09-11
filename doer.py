import sqlite3
from flask import Flask, Response
import json


db_name = "koala.db"
# application.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///" + db_name
# application.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
# db = SQLAlchemy(application)

def get_character(element):
    try:
        connection = sqlite3.connect(db_name)
        c = connection.cursor()
        c.execute("select * from koalas where Type='%s'" % element)
        info = c.fetchall()
        return info
    except Exception as e:
        print("Error: ", e)
        return None

def get_arena_info(playerRole):
    
    data = []

    try:
        connection = sqlite3.connect(db_name)
        c = connection.cursor()
        c.execute("select * from koalas where Type='%s'" % playerRole)
        info = c.fetchall()
        data.append(list(info[0]))
    except Exception as e:
        print("Error: ", e)
        return None

    if playerRole == "Bear":
        data.append("/static/images/Bear.jpg")
    elif playerRole == "Queenslander":
        data.append("/static/images/Queenslander.jpeg")
    elif playerRole == "Phascolarctos":
        data.append("/static/images/Phascolarctos.jpeg")
    elif playerRole == "Joey":
        data.append("/static/images/Joey.jpg")

    try:
        connection = sqlite3.connect(db_name)
        c = connection.cursor()
        c.execute("select * from koalas where Type='%s'" % "Enemy-RabidKoala")
        info = c.fetchall()
        data.append(list(info[0]))
    except Exception as e:
        print("Error: ", e)
        return None

    data.append("/static/images/rabidkoala.jpeg")
    
    print(data)
    return data

get_arena_info("Bear")