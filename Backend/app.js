const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const tf = require('@tensorflow/tfjs-node');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

// Load the TensorFlow SavedModel
let model;
tf.node.loadSavedModel('Backend/tf_logistic_regression').then(loadedModel => {
    model = loadedModel;
    console.log('Model loaded successfully');
});

// Endpoint for predicting the disease based on symptoms
app.post('/predict', async (req, res) => {
    const { symptoms } = req.body;

    // Ensure symptoms are in the right format for prediction
    const symptomsArray = Object.values(symptoms).map(Number);
    const inputTensor = tf.tensor([symptomsArray], [1, 5], 'float32');

    try {
        const predictions = await model.predict(inputTensor);
        const prediction = predictions.arraySync();
        res.json({ prediction: prediction[0] });
    } catch (error) {
        console.error('Error making prediction:', error);
        res.status(500).send('Error making prediction');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
