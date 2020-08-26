import io
import base64
import json

from torchvision import models
import torchvision.transforms as transforms
from PIL import Image
from flask import Flask, jsonify, request
from flask_cors import CORS

from utils import get_prediction, prepare_model

app = Flask(__name__)
cors = CORS(app)
model = prepare_model()
model.eval()

@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        file = request.files['file']
        img_bytes = file.read()
        class_name = get_prediction(model, image_bytes=img_bytes)
        return jsonify(
            {
                "results": [{'model': 'breed', 'prediction': class_name}],
                "image": base64.b64encode(img_bytes).decode("utf-8"),
                "status": "SUCCEEDED",
            },
        )


if __name__ == '__main__':
    app.run(debug=True)