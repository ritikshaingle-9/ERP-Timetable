# ERP Timetable Management System

## 📌 Project Overview
This project is an **ERP Timetable Management Module** that allows an admin to create, view, update, and delete class timetables.  
It ensures **conflict-free scheduling** by validating teacher and class availability.

The system is designed as part of an educational ERP where timetables are centrally managed instead of manual spreadsheets.

---

## 🎯 Features
- Create timetable entries (class, day, period, subject, teacher)
- View timetable for a specific class
- Update timetable entries
- Delete timetable entries
- Prevents conflicts:
  - A teacher cannot be assigned to two classes at the same time
  - A class cannot have two subjects in the same period
- Proper error handling and validations

---

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **API Testing:** Postman
- **Tools:** VS Code, MySQL Workbench

---

## 🗂️ Database Schema

### Tables Used
- **classes** (id, name)
- **subjects** (id, name)
- **teachers** (id, name)
- **timeslots** (id, start_time, end_time, period_no)
- **timetable** (id, class_id, day_of_week, timeslot_id, subject_id, teacher_id)

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone <your-github-repo-link>
cd ERP-Timetable/server
