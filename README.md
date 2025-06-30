# 🕒 GeoClock: Employee Clock-In System with Geotagging

GeoClock is a web-based employee attendance system that uses geolocation to allow employees to clock in and out only within designated work areas. Designed for accuracy, transparency, and accountability in workforce management.

---

## 📦 Stack

- **Backend**: Django (Python)
- **Frontend**: Bootstrap 5
- **Database**: PostgreSQL
- **Geolocation**: HTML5 Geolocation API + Server-Side Validation (Haversine formula or geopy)
- **Optional**: Google Maps or Leaflet.js for admin map views

---

## 🔧 Features

### 🧑 Employee
- Secure login
- Clock in/out via browser
- Automatic geolocation capture
- Block clock-ins outside the assigned location
- View clock-in history (optional)

### 🛠️ Admin
- Manage employees and roles
- Set and update allowed work locations
- Define acceptable distance radius for each employee
- View, search, and filter attendance logs
- Export reports (CSV/PDF)
- Dashboard with summary analytics (optional)

---

## 🗂️ Apps & Responsibilities

| Django App      | Responsibility                          |
|------------------|------------------------------------------|
| `users`          | Authentication, user profiles, roles     |
| `worklocations`  | Assign & manage geotagged work locations |
| `attendance`     | Clock-in/out logic, logging, validation  |
| `reporting`      | Admin dashboards and report generation   |

---

## 🧩 Data Models (Simplified)

### `Employee`
- Linked to Django `User`
- Additional metadata (if needed)

### `WorkLocation`
- Latitude, Longitude
- Radius in meters

### `AttendanceLog`
- Clock in/out timestamp
- Recorded lat/lng
- Status (within range or not)

---

## 🔄 Clock-In Workflow

1. User logs in and opens the clock-in page.
2. System requests geolocation via browser.
3. Coordinates are sent to the backend.
4. Backend verifies if location is within allowed range.
5. If valid, log is saved; else, action is blocked.
6. Feedback is displayed to the user.

---

## 📅 Future Enhancements

- Mobile-friendly design or PWA support
- Facial recognition or selfie verification
- Push notifications for late clock-ins
- Leave and shift management
- Integration with payroll systems

---
