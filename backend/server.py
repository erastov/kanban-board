import flask
import flask_sqlalchemy as fs
import flask_restless as fr

# Create the Flask application and the Flask-SQLAlchemy object.
app = flask.Flask(__name__)
app.config['DEBUG'] = True
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
db = fs.SQLAlchemy(app)


class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.Unicode)
    type = db.Column(db.Unicode)
    priority = db.Column(db.Integer)


# Create the database tables.
db.create_all()

# Create the Flask-Restless API manager.
manager = fr.APIManager(app, flask_sqlalchemy_db=db)

# Create API endpoints, which will be available at /api/<tablename> by
# default. Allowed HTTP methods can be specified as well.
manager.create_api(Task, methods=['GET', 'POST', 'PATCH'])

# start the flask loop
app.run()
