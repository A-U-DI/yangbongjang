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
    if request.method == 'GET':
        return render_template('signUp.html')
    elif request.method == 'POST':
        print('wait')
        id = request.form.get('userid')
        email = request.form.get('email')
        nickname = request.form.get('nickname')
        password = request.form.get('password')
        print('data')
        if not(id and email and nickname and password):
            flash("회원정보를 모두 기입해주세요.")
            return render_template('signUp.html')
        else:
            print('db wait')
            cursor = db.cursor()
            sql = "INSERT INTO User(id,email,nickname,password) VALUES (%s, %s, %s, %s);"
            cursor.execute(sql,(id, email, nickname, password))
            db.commit()
            print('success')
            print(id+email+nickname+password)
        return redirect('/')

# sign in
@app.route('/api/signIn', methods=['GET','POST'])
def signIn():
    if request.method == 'POST':
        login_info = request.form
        id = login_info['id']
        password = login_info['password']
        cursor = db.cursor()
        sql = "SELECT * FROM User WHERE id = %s"
        rows_count = cursor.execute(sql, id)

        if rows_count > 0:
            user_info =cursor.fetchone()
            print("user info: ", user_info)
            if (password == user_info[3]):
                print("Login Success")
                #session
                session["id"] = id
                session["nickname"] = user_info[2]
                return redirect('/')
            else:
                print("Login Fail")
            return render_template('signIn.html')
        else:
            print('user does not exist')
            return render_template('signIn.html')
    return render_template('signIn.html')

# sign in
@app.route('/api/logout', methods=['GET','POST'])
def logout():
    session["id"] = None
    session["nickname"] =None
    return redirect('/')

# flask run
if __name__ == '__main__':
    app.run()