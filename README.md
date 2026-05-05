# awesome-website
church website

# CCSPFUTA Alumni Tech - Church Website

A full-stack web application for the Celestial Church of Christ, providing a modern digital platform for church management, events coordination, and community engagement.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Backend Setup (Go)](#backend-setup-go)
- [Frontend Setup (TypeScript/React)](#frontend-setup-typescriptreact)
- [API Documentation](#api-documentation)
- [Environment Variables](#environment-variables)
- [Development Workflow](#development-workflow)
- [Database Schema](#database-schema)
- [Authentication](#authentication)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

---

## Overview

This project is a comprehensive church management website designed for the Celestial Church of Christ. It provides both administrative functionality for church staff and a user-friendly interface for congregants. The application enables church members to:

- View upcoming events and services
- Browse photo galleries
- Manage user accounts
- Submit contact inquiries
- Access exclusive members-only content

The platform features a robust backend API built with Go and a modern frontend built with TypeScript/React.

---

## Tech Stack

### Backend
- **Language**: Go
- **Framework**: Gorilla Mux (HTTP routing)
- **Database**: MySQL
- **Authentication**: JWT (JSON Web Tokens)
- **Additional Libraries**:
  - `gorilla/handlers` - CORS and HTTP utilities
  - `gorilla/mux` - URL routing and dispatching
  - `joho/godotenv` - Environment variable management
  - `mysql/mysql-go-driver` - Database connectivity

### Frontend
- **Language**: TypeScript
- **Total Size**: ~315 KB of TypeScript code
- **Frontend Ratio**: ~93% TypeScript, ~4.5% JavaScript, ~2.6% CSS, ~1.6% Go

### Additional
- **Database**: MySQL
- **API**: RESTful HTTP API
- **CORS**: Enabled for cross-origin requests
- **Authentication**: JWT tokens for secure API access

---

## Project Structure
