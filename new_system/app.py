# -*- coding: utf-8 -*-
"""
@author:  Administrator
@software: PyCharm
@file: app.py
@time: 2022/5/3
"""
from flask import Flask, jsonify
from flask_cors import CORS
from db_query import mainData

app = Flask(__name__)

app.config.from_object(__name__)
CORS(app)


@app.route('/overview')
def waterInfo():
    return mainData()


if __name__ == '__main__':
    app.run()
