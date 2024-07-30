from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)  # Enable CORS

# Load the trained model
model = joblib.load('logistic_regression_model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    # Get the JSON data from the request
    data = request.get_json()

    # Extract the symptoms
    symptoms = np.array([data['S1'], data['S2'], data['S3'], data['S4'], data['S5']])

    # Reshape for the model (if needed)
    symptoms = symptoms.reshape(1, -1)

    # Make prediction
    prediction = model.predict(symptoms)

    # Send the response
    return jsonify({'prediction': int(prediction[0])})

if __name__ == '__main__':
    app.run(debug=True)
