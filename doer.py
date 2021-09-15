import sqlite3
from flask import Flask, Response
import json


db_name = "koala.db"


def get_arena_info(playerRole):
#this function will pull data from koala.db to be presented on the arena page.    
    data = []

    #this block will return a list of the correct role's stats, and append it into data
    try:
        connection = sqlite3.connect(db_name)
        c = connection.cursor()
        c.execute("select * from koalas where Type='%s'" % playerRole)
        info = c.fetchall()
        data.append(list(info[0]))
    except Exception as e:
        print("Error: ", e)
        return None

    #this block will pull the correct role's image, and append it into data
    if playerRole == "Bear":
        data.append("/static/images/Bear.jpg")
    elif playerRole == "Queenslander":
        data.append("/static/images/Queenslander.jpeg")
    elif playerRole == "Phascolarctos":
        data.append("/static/images/Phascolarctos.jpeg")
    elif playerRole == "Joey":
        data.append("/static/images/Joey.jpg")

    #this block will return a list of the initial enemy's stats, and append it into data
    try:
        connection = sqlite3.connect(db_name)
        c = connection.cursor()
        c.execute("select * from koalas where Type='%s'" % "Enemy-RabidKoala")
        info = c.fetchall()
        data.append(list(info[0]))
    except Exception as e:
        print("Error: ", e)
        return None

    #this block will return a list of the  inital enemy's stats, and append it into data
    data.append("/static/images/rabidkoala.jpeg")
    
    print(data)
    return data


def get_enemy_info(element):
    try:
        connection = sqlite3.connect(db_name)
        c = connection.cursor()
        c.execute("select * from Enemies where ID='%s'" % element)
        info = c.fetchall()
        character_data = list(info[0])
        print(character_data)
        return character_data
    except Exception as e:
        print("Error: ", e)
        return None





# def get_character_info(element):
#     try:
#         connection = sqlite3.connect(db_name)
#         c = connection.cursor()
#         c.execute("select * from koalas where Type='%s'" % element)
#         info = c.fetchall()
#         character_data = list(info[0])
#         print(character_data)
#         return character_data
#     except Exception as e:
#         print("Error: ", e)
#         return None
# get_arena_info("Bear")
# get_character_info("Bear")