import sqlite3
from flask import Flask


db_name = "koala.db"
# application.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///" + db_name
# application.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
# db = SQLAlchemy(application)

def get_player(element):
    try:
        connection = sqlite3.connect(db_name)
        c = connection.cursor()
        c.execute("select * from koalas where Type='%s'" % element)
        info = c.fetchall()
        return info
    except Exception as e:
        print("Error: ", e)
        return None


