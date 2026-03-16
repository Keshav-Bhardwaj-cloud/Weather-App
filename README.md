# 🌦️ Weather App

A simple and clean **Weather Application** built using **HTML, CSS, and JavaScript** that fetches real-time weather data from the **OpenWeather API**.

The app allows users to check weather conditions by searching for a city or by using their **current location**.

---

## 🚀 Features

🌍 Get weather using **current location (Geolocation API)**
🔎 Search weather by **city name**
🌡️ Displays **temperature, humidity, and wind speed**
🌤️ Dynamic **weather icons** based on conditions
🎨 **Background changes** depending on weather type
💾 Saves **last searched city using Local Storage**
⌨️ Press **Enter to search instantly**

---

## 🛠️ Built With

* 🌐 HTML5
* 🎨 CSS3
* ⚡ JavaScript (ES6)
* ☁️ OpenWeather API
* 📍 Geolocation API
* 💾 LocalStorage

---

## 📂 Project Structure

```
weather-app
│
├── index.html
├── script.js
├── style.css
├── config.js        (contains API key - not uploaded to GitHub)
└── .gitignore
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```
git clone https://github.com/yourusername/weather-app.git
```

### 2️⃣ Navigate to the project

```
cd weather-app
```

### 3️⃣ Add your API Key

Create a file called:

```
config.js
```

Inside it write:

```javascript
export const Api_Key = "YOUR_API_KEY_HERE";
```

You can get a free API key from:

https://openweathermap.org/api

---

## 🖥️ How It Works

1️⃣ When the page loads, the app tries to get your **current location**.
2️⃣ If location is allowed, it fetches the **weather for your coordinates**.
3️⃣ If you search for a city, it fetches **weather for that city**.
4️⃣ The last searched city is **saved in LocalStorage** so it loads automatically next time.

---

## 📸 Preview

Weather Card shows:

* City Name
* Temperature
* Weather Icon
* Description
* Humidity
* Wind Speed

---

## 🔮 Future Improvements

* 🌤️ 5-day weather forecast
* 🌙 Dark mode
* 📱 Mobile responsive improvements
* 📍 Recent search history
* 🗺️ Weather map integration

---

## 📄 License

This project is open-source and free to use.

---

## 👨‍💻 Author

Built by **Keshav Bhardwaj** while learning **Frontend Development**.
