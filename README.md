# 🕒 GeoClock: Employee Clock-In System with Geotagging

GeoClock is a web-based employee attendance system that uses geolocation to allow employees to clock in and out **only within designated work areas**. It is designed for **accuracy, transparency, and accountability** in workforce management — ideal for companies managing remote or field employees.

---

## 📦 Tech Stack

- **Backend**: Django (Python)
- **Frontend**: Bootstrap 5
- **Database**: PostgreSQL
- **Geolocation**: HTML5 Geolocation API + Server-Side Validation (e.g., Haversine formula or `geopy`)
- **Optional Enhancements**: Google Maps or Leaflet.js for location setup

---

## 🔐 User Roles

| Role           | Description                                                      |
|----------------|------------------------------------------------------------------|
| **Super Admin** | Platform owner. Creates & manages client companies              |
| **Company Admin** | Manages employees & work locations for their company           |
| **Employee**     | Can clock in/out if within assigned geofence                    |

---

## 🔧 Features

### 👨‍💼 Employee
- Secure login
- Clock in/out via browser
- Automatic geolocation capture
- Prevent clock-in/out outside the allowed work location
- View personal clock-in/out history

### 🛠️ Admin (Company)
- Add and manage employees
- Assign geofenced work locations (lat/lng + radius)
- View and filter attendance logs
- Export logs to CSV or PDF
- Dashboard summary and stats (optional)

### 🧑‍💻 Platform Admin (Superuser)
- Create and manage client companies
- Assign Company Admins
- View usage per company

---

## 🗂️ Django Apps Overview

| App            | Responsibility                                  |
|----------------|--------------------------------------------------|
| `users`        | Authentication, custom user model, roles         |
| `companies`    | Company profile, admin linkage                   |
| `worklocations`| Define and manage allowed locations              |
| `attendance`   | Clock in/out logic, geolocation checks           |
| `reporting`    | Export reports, attendance dashboards            |

---

## 🧩 Key Models (Simplified)

### `User` (custom)
- Username, password, email, role
- ForeignKey to `Company` (nullable for SuperAdmin)

### `Company`
- Name, contact details
- Timestamped creation

### `WorkLocation`
- Latitude, Longitude, Radius (meters)
- Assigned to company

### `AttendanceLog`
- Employee (FK to User)
- Type (Clock-In / Clock-Out)
- Timestamp
- Captured coordinates
- Status (within range or not)

---

## 🔄 Clock-In Workflow

1. User logs in and accesses the clock-in page.
2. The browser requests permission to access geolocation.
3. Latitude and longitude are captured and sent to the backend.
4. Backend checks if coordinates are within allowed work location.
5. If yes, a log is saved and a success message shown.
6. If no, the attempt is denied and an error message shown.

---

📅 Future Enhancements
Mobile-friendly UI or PWA

Selfie or facial recognition during clock-in

Push notifications for late or missing logs

Leave/shift scheduling

Payroll integrations

Biometric device support (external API)
