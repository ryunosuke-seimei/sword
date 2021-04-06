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
    data = json.loads(request.json["data"])
    title = data["title"]
    form_list = data["data"]
    values = [title]
    for form in form_list:
        values.append(form["value"])

    data_format = ",".join(["%s"] * 11)
    db_connection = db.connect(host=app.config["HOST"], user=app.config["USER"], password=app.config["PASSWORD"],
                               database=app.config["DATABASES"])
    cursor = db_connection.cursor()
    cursor.execute(
        "INSERT INTO word_table(name,flag0,flag1,flag2,flag3,flag4,flag5,flag6,flag7,flag8,flag9) values({})".format(
            data_format), tuple(values))
    db_connection.commit()
    return jsonify("ok")


if __name__ == '__main__':
    app.run(host=app.config["HOST"])
