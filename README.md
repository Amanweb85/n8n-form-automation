# FormFlow Automation

A simple automation pipeline that connects a React frontend form with an automation workflow using n8n.

The project demonstrates how form submissions can trigger automated processes such as storing data and sending real-time notifications.

## 🚀 Workflow Architecture

```
React Form (TypeScript + Tailwind)
↓
Webhook
↓
n8n Automation (Format Data + Timestamp)
↓
Google Sheets (Data Storage)
↓
Telegram Bot (Real-time Notification)
```

## 🚀 Workflow Architecture

```mermaid
flowchart LR
A[React Form<br>TypeScript + Tailwind]
B[Webhook]
C[n8n Automation]
D[Google Sheets<br>Data Storage]
E[Telegram Bot<br>Real-time Notification]

A --> B
B --> C
C --> D
C --> E
```

## 🛠 Tech Stack

Frontend

- React
- TypeScript
- Tailwind CSS

Automation

- n8n
- Webhooks

Integrations

- Google Sheets
- Telegram Bot API

## ✨ Features

- Clean React + TypeScript contact form
- Reusable UI components
- Webhook-based automation trigger
- Automatic storage of form submissions
- Real-time Telegram notifications
- Simple automation workflow using n8n

## 📌 How It Works

1. User fills the contact form.
2. The form sends a POST request to an n8n webhook.
3. The workflow processes the request.
4. Form data is stored in Google Sheets.
5. A Telegram notification is sent instantly.

## 📽 Demo

Demo video: (https://drive.google.com/file/d/1s6vivxtjIvodnIl5cbGvwffYwoHdQbTh/view?usp=sharing)

<img src="./src/assets/demo.gif" width="800" alt="Project Demo"/>

## 📂 Project Structure

```
├── components/
│ ├── ui/
│ │ ├── Input.tsx
│ │ ├── Spinner.tsx
│ │ └── Alert.tsx
│ │
│ └── ContactForm.tsx
│
├── services/
│ └── webhook.ts
│
├── types/
│ └── form.ts
```

## 📬 Example Telegram Notification

New Form Submission 🚀

Name: Aman Verma  
Email: amanvermammb2005@gmail.com  
Message: Hello from the contact form
