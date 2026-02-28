# Celestial Church of Christ - Node.js Backend API

Complete backend API for the church website with authentication, events management, gallery, and contact forms.

## Setup Instructions

### 1. Install Dependencies
```bash
cd server
npm install
```

### 2. Setup MySQL Database
```bash
mysql -u root -p
CREATE DATABASE celestial_church;
EXIT;
```

### 3. Configure Environment Variables
```bash
cp .env.example .env
# Edit .env with your configuration
```

### 4. Start the Server
```bash
# Development with auto-reload
npm run dev

# Production
npm start
```

Server will run on `http://localhost:5000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login and get JWT token

### Events
- `GET /api/events` - Get all events
- `POST /api/events` - Create event (admin only)
- `PUT /api/events/:id` - Update event (admin only)
- `DELETE /api/events/:id` - Delete event (admin only)

### Gallery
- `GET /api/gallery` - Get all photos
- `POST /api/gallery/upload` - Upload photo (admin only)
- `DELETE /api/gallery/:id` - Delete photo (admin only)

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all submissions (admin only)

### Users
- `GET /api/users` - Get all users (admin only)

## Frontend Integration

Use the JWT token from login for authenticated requests:

```javascript
const response = await fetch('/api/events', {
  headers: {
    'Authorization': \`Bearer \${token}\`
  }
});
```
