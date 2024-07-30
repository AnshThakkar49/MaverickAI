import tensorflow as tf
import joblib
import numpy as np

# Load your logistic regression model and scaler
model = joblib.load('Backend/logistic_regression_model.pkl')
scaler = joblib.load('Backend/scaler.pkl')

# Define a function to make predictions
def predict(input_features):
    scaled_features = scaler.transform(input_features)
    return model.predict(scaled_features)

# Create a simple TensorFlow model to wrap the scikit-learn model
class LogisticRegressionModel(tf.Module):
    def __init__(self):
        super().__init__()

    @tf.function(input_signature=[tf.TensorSpec(shape=[None, 5], dtype=tf.float32)])
    def __call__(self, input_features):
        predictions = predict(input_features.numpy())
        return tf.constant(predictions, dtype=tf.float32)

# Create an instance of the model
logistic_regression_model = LogisticRegressionModel()

# Save the model in TensorFlow SavedModel format
tf.saved_model.save(logistic_regression_model, 'Backend/tf_logistic_regression')
