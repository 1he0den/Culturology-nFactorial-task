# 🌍 Culturology – Исследование народов мира
Culturology — это веб-приложение, позволяющее пользователям знакомиться с различными народами мира, их культурой, традициями и праздниками. Проект разработан в рамках задания nFactorial и направлен на расширение культурного кругозора пользователей.

## 🛠️ Технологический стек
### Frontend: React, Ant Design, React Router

### Backend: FastAPI, OpenAI API

### Деплой: Railway (backend), Vercel (frontend)

## 🚀 Установка и запуск
### 📦 Клонирование репозитория
```bash
git clone https://github.com/1he0den/Culturology-nFactorial-task.git
cd Culturology-nFactorial-task
```
### 🖥️ Запуск фронтенда
```
cd frontend
npm install
npm run dev
```
Приложение будет доступно по адресу: http://localhost:5173/

### ⚙️ Запуск бэкенда
```
cd backend
python -m venv venv
source venv/bin/activate // for MacOS/Linux
pip install -r requirements.txt // for Windows 
uvicorn app.main:app --reload
```
Бэкенд будет доступен по адресу: http://127.0.0.1:8000

- ** Примечание: Убедитесь, что переменная окружения OPENAI_API_KEY установлена для корректной работы API. **
