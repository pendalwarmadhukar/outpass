# 🚀 Online Outpass System (PassPortal)

A comprehensive, secure, and digitized platform for managing student out-pass requests, designed for smart campus logistics. This system streamlines the process of applying, verifying, and tracking student movements in real-time.

---

## 🌟 Key Features

### 🎓 Student Module
- **Digital Application**: Submit out-pass requests with trip details, duration, and supporting documents.
- **Real-time Status**: Track the progress of your application from "Pending" to "Approved/Rejected".
- **History Tracking**: View a complete log of all past out-passes and leave requests.
- **College Leave**: Dedicated section for official college-related leaves.

### 🛡️ Admin Module
- **Request Management**: Review, approve, or reject student out-pass requests with a single click.
- **Comprehensive Reports**: Access detailed analytics and logs of campus movements.
- **System Dashboard**: High-level overview of active, pending, and completed out-passes.

### 💂 Security Module
- **Verify Outpasses**: Securely verify students at the gate using digital pass details.
- **Real-time Logs**: Keep track of students entering and exiting the campus.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|-|
| **Frontend** | React.js (v19), React Router DOM, FontAwesome, Vanilla CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Mongoose ODM) |
| **Security** | JSON Web Tokens (JWT), Bcrypt.js (Password Hashing) |
| **Features** | Multer (File Uploads), Nodemailer (Email Notifications) |

---

## 📂 Project Structure

```text
outpass/
├── frontend/           # React Application
│   ├── src/
│   │   ├── components/ # Reusable UI Components
│   │   ├── pages/      # Main Page Views
│   │   └── styles/     # CSS Styling
│   └── package.json
├── backend/            # Express API
│   ├── config/         # Database & App Config
│   ├── models/         # Mongoose Schemas
│   ├── routes/         # API Endpoints
│   ├── uploads/        # Stored Documents
│   └── server.js       # Entry point
└── README.md           # Documentation
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- MongoDB (Local or Atlas)
- `.env` file with necessary credentials

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/pendalwarmadhukar/outpass.git
   cd outpass
   ```

2. **Frontend Setup**:
   ```bash
   cd frontend
   npm install
   npm start
   ```

3. **Backend Setup**:
   ```bash
   cd ../backend
   npm install
   # Create a .env file and add your MONGO_URI, JWT_SECRET, etc.
   npm start
   ```

---

## 📝 License
This project is licensed under the ISC License.

---

## 👨‍💻 Developed by
**Madhukar Pendalwar**
[GitHub Profile](https://github.com/pendalwarmadhukar)