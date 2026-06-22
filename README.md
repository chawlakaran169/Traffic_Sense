# TrafficSense

TrafficSense is a Flask dashboard for analyzing Bengaluru traffic incident data, visualizing trends, and generating response recommendations.

## Screenshots

### Dashboard 1
![Dashboard 1](screenshots/Dashboard_1_01.png)

### Dashboard 2
![Dashboard 2](screenshots/Dashboard_2_01.png)

## Project Structure
- `app.py` — Flask application entry point
- `templates/traffic_dashboard.html` — main dashboard UI
- `static/styles.css` — dashboard styling
- `static/app.js` — charts, prediction logic, and recommendations
- `Data/` — datasets used for analysis
- `models/` — trained model artifacts

## How to Run
1. Create and activate a virtual environment (optional but recommended)
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Start the app:
   ```bash
   python app.py
   ```
4. Open the dashboard in your browser:
   ```text
   http://127.0.0.1:5000
   ```

## Notes
- The app is designed for local development and demo purposes.
