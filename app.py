from flask import Flask, render_template, request, redirect, url_for, flash
import sqlite3
from werkzeug.security import generate_password_hash, check_password_hash
import os

# Initialize Flask app
app = Flask(__name__, template_folder="templates", static_folder="static")
app.secret_key = "your_secret_key"  # Required for flash messages

# Ensure the database is created
def init_db():
    with sqlite3.connect("database.db") as conn:
        cursor = conn.cursor()
        cursor.execute('''CREATE TABLE IF NOT EXISTS users (
                          id INTEGER PRIMARY KEY AUTOINCREMENT,
                          fullname TEXT,
                          username TEXT UNIQUE,
                          email TEXT UNIQUE,
                          phone TEXT,
                          password TEXT,
                          gender TEXT)''')
        conn.commit()

# Registration Route
@app.route("/", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        fullname = request.form["fullname"]
        username = request.form["username"]
        email = request.form["email"]
        phone = request.form["number"]
        password = request.form["password"]
        gender = request.form["gender"]

        hashed_password = generate_password_hash(password)

        try:
            with sqlite3.connect("database.db") as conn:
                cursor = conn.cursor()
                cursor.execute("INSERT INTO users (fullname, username, email, phone, password, gender) VALUES (?, ?, ?, ?, ?, ?)",
                               (fullname, username, email, phone, hashed_password, gender))
                conn.commit()
            return redirect(url_for("success"))

        except sqlite3.IntegrityError:
            flash("Username or Email already exists!", "danger")

    return render_template("register.html")

# Success Page Route
@app.route("/success")
def success():
    try:
        return render_template("success.html")
    except Exception as e:
        return f"Error loading template: {e}"

# Start Flask App
if __name__ == "__main__":
    init_db()
    print(f"Templates Path: {os.path.abspath('templates')}")
    app.run(debug=True)
