# app.py
from flask import Flask, render_template, redirect, request, session , flash
from flask_session import Session
#Flask 객체 인스턴스 생성
app = Flask(__name__)
app.config["SECRET_KEY"] = "ABCD"
#CORS
from flask_cors import CORS
CORS(app)
#Session
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)
# DB
import pymysql
import pandas as pd
import os
db = pymysql.connect(host='localhost',
                     port=3306,
                     user='root',
                     passwd='1234',
                     db='ybj',
                     charset='utf8')
# main
@app.route('/', methods=['GET','POST'])
def main():
    return render_template('index.html')

# sign up
@app.route('/api/signUp', methods=['GET','POST'])
def signUp():
    if request.method == 'POST':
        email = request.form['email']
        nickname = request.form['nickname']
        password = request.form['password']
        cursor = db.cursor()
        sql = "INSERT INTO User(email,nickname,password) VALUES (%s, %s, %s);"
        cursor.execute(sql,(email, nickname, password))
        db.commit()
        return "USER CREATED"

# sign in
@app.route('/api/signIn', methods=['GET','POST'])
def signIn():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        cursor = db.cursor()
        sql = "SELECT * FROM User WHERE email = %s"
        rows_count = cursor.execute(sql, email)
        if rows_count > 0:
            user_info = cursor.fetchone()
            if (password == user_info[3]):
                #session
                session["email"] = email
                session["nickname"] = user_info[2]
                return "ACCESS APPROVED"
        return "ACCESS DENIED"
    else:
        return "ACCESS DENIED"

# logout
@app.route('/api/logout', methods=['GET','POST'])
def logout():
    session["email"] = None
    session["nickname"] = None
    session["password"] = None
    return redirect('/')

# board
@app.route('/api/board', methods=['GET','POST'])
def board():
    return redirect('/')

# post
@app.route('/api/post', methods=['GET','POST'])
def post():    
    return redirect('/')

# flask run
if __name__ == '__main__':
    app.run()