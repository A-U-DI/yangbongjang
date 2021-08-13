from flask import Flask
app = Flask(__name__)

# DB
import pymysql
import pandas as pd
import os
db = pymysql.connect(host='localhost',
                     port=3306,
                     user='root',
                     passwd='****',
                     db='ybj',
                     charset='utf8')

@app.route('/')
def hello_world():
    return 'Hello World!'

if __name__ == '__main__':
    app.run()