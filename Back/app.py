from flask import Flask, request, render_template, redirect, url_for, jsonify
from flask_cors import CORS
import mysql.connector as db
import json

app = Flask(__name__, instance_relative_config=True)
CORS(app)

# instance/config.cfg と指定しなくてよい
# cfg は全て大文字
app.config.from_pyfile('config.cfg')


@app.route('/rin_jin/item-api', methods=["GET"])
def API_get():
    word_table = "test"
    return jsonify(word_table)


@app.route("/rin_jin/item-api", methods=["POST"])
def API_insert():
    return jsonify("ok")


if __name__ == '__main__':
    app.run(host=app.config["HOST"])
