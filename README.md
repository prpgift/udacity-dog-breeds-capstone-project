# udacity-dog-breeds-capstone-project

## Description
The Dog breed classifier is a problem that can be solved with the ML model. The problem is identifying a breed of a dog with a dog image that is given as an input. This is a multi-class classification problem where we can use a supervised ML model to solve. After completing the ML model then I build a web application and Rest-API for users to upload an image and get results from the ML model. This project gives me the knowledge to build an end-to-end ML project, so I have chosen this project as my capstone project.

## Dependencies
- Python3 (version >= 3.6)
- Pip (For install Python packages)
- npm & node (For build web application by Javascript)

## Usage

### Start Restful API service for serving ML model
```bash
# Checkout to backend directory
$ cd service
# Install Python packages
$ pip install -r requirements.txt
# Run API service
$ python3 app.py
 * Serving Flask app "app" (lazy loading)
 * Environment: production
   WARNING: This is a development server. Do not use it in a production deployment.
   Use a production WSGI server instead.
 * Debug mode: on
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
 * Restarting with fsevents reloader
 * Debugger is active!
 * Debugger PIN: 152-699-317
```

### Start web application
```bash
# Checkout to frontend directory
$ cd webapp
# Install Javascript package
$ npm install
# Run Web Application
$ npm start
```

If you run success, You can use web application by web browser at (http://localhost:300)

