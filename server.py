import subprocess
from flask import *
from os import path
from cmd_sender import send_cmd

static_assets_path = path.join(path.dirname(__file__), "dist")
app = Flask(__name__, static_folder=static_assets_path)

def _cmd(cmd):
	return send_cmd(cmd)

# ----- Routes ----------

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return app.send_static_file("index.html")

@app.route('/cmd')
def cmd():
	cmd = request.args.get('cmd')
   	return _cmd(cmd)

if __name__ == "__main__":

    app.run(host='0.0.0.0', port=3000, threaded=True)