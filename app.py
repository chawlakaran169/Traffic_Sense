from flask import Flask, redirect, render_template, url_for

app = Flask(__name__)


@app.route('/')
def index():
    return redirect(url_for('traffic_dashboard'))


@app.route('/dashboard')
def traffic_dashboard():
    return render_template('traffic_dashboard.html')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
