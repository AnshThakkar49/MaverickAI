import joblib
import numpy as np
from flask import Flask, request, jsonify

# Load the logistic regression model
model = joblib.load('logistic_regression_model.pkl')

app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to the Disease Prediction API!"

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the data from the request
        data = request.json

        # Extract symptom values from the request
        symptoms = [data['S1'], data['S2'], data['S3'], data['S4'], data['S5']]

        # Convert symptoms to numpy array and reshape for prediction
        symptoms_array = np.array(symptoms).reshape(1, -1)

        # Make prediction
        prediction = model.predict(symptoms_array)

        # Map the numeric prediction to the disease name
        disease = int(prediction[0])

        # Return the result as JSON
        return jsonify({'disease': disease})

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
