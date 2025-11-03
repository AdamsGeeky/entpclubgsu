## 🏗️ 1. System Architecture

**Architecture Pattern:** Modular MVC + API-driven (with React frontend and Supabase backend)

**Tech Stack Summary:**

| Layer | Technology |
|-------|-------------|
| **Frontend** | React (Vite / Next.js), TailwindCSS, Framer Motion |
| **Backend / Database** | Supabase (PostgreSQL + Edge Functions) |
| **Authentication** | Supabase Auth (email/password, OAuth) |
| **File Storage** | Supabase Storage (for club media, gallery uploads) |
| **Hosting / Deployment** | Vercel (frontend) + Supabase Cloud (backend) |
| **Version Control** | Git + GitHub |
| **Documentation** | Markdown files in `/docs` directory |

**High-Level Architecture:**

```plaintext
┌───────────────────────────────┐
│         Client (UI)           │
│  React + Tailwind + Framer    │
│  Pages: Dashboard, Events,    │
│  Members, Gallery, etc.       │
└──────────────┬────────────────┘
               │
     HTTPS / Supabase SDK
               │
┌──────────────▼────────────────┐
│       Supabase Backend        │
│ - Authentication & Auth Rules │
│ - Edge Functions (API logic)  │
│ - Database (PostgreSQL)       │
│ - Storage (Media uploads)     │
└──────────────┬────────────────┘
               │
        Supabase Cloud
               │
     ┌─────────▼───────────┐
     │ PostgreSQL Database │
     │ Tables: Users,      │
     │ Events, Members,    │
     │ Clubs, Gallery, etc │
     └─────────────────────┘
```

2. Core Modules

## Authentication & User Management

### Features:

Register/Login via Supabase Auth

Role-based Access: Admin, President, Member, Guest

Email verification

Password reset

JWT for secure API calls

### Tables:

users

roles

sessions (managed by Supabase internally)

## Club Management Module

Manage club profile, logo, cover image, founding year, and category badges.

Track total members and role distribution.

Manage invites and approvals.

### Tables:

clubs (one main record for the GSU Entrepreneurship Club)

club_members

roles

## Event Management Module
Organize and display entrepreneurship events (Workshops, Competitions, etc.)

RSVP system with progress tracking and capacity limits.

Event reminders and attendance analytics.

### Tables:

events

event_attendees

event_categories

Edge Functions:

/api/events/create

/api/events/rsvp

/api/events/attendees

## Event Gallery Module
Upload and display photos/videos from past events.

Filter by year, category, or organizer.

Supports lightbox view and sharing.

Admin-only upload permissions.

### Tables:

gallery

gallery_media

media_tags

Storage:

Folder structure in Supabase Storage:

```bash
/gallery/
   /2023/
   /2024/
   /competitions/
   /workshops/
```

## Member Directory
Display members with avatars, join year, and role.

Search and filter by department, year, or position.

Admin control to assign or remove roles.

### Tables:

members

roles

departments (optional for filtering)

## Announcements & Communication
(Future Feature)

Create bulletin posts visible to all members.

Notify users via Supabase functions + email triggers.

### Tables:

announcements

notifications

3. Database Schema (Supabase PostgreSQL)

Tables Overview
Table	Description
users	Basic user data (auth-linked)
roles	Defines roles (Admin, President, Member, etc.)
clubs	Club details and settings
club_members	Links users to clubs
events	Event details
event_attendees	Tracks RSVPs
gallery	List of gallery collections
gallery_media	Individual media items
notifications	System notifications
achievements	Badges, certificates, and participation credits

Example Table: events
Field	Type	Description
id	UUID	Primary key
title	VARCHAR(255)	Event title
description	TEXT	Detailed info
organizer	VARCHAR(255)	Name or club branch
category	VARCHAR(100)	Workshop, Competition, etc.
date	DATE	Event date
time	TIME	Event start time
location	VARCHAR(255)	Venue
capacity	INTEGER	Max participants
cover_image	TEXT	Supabase storage URL
created_at	TIMESTAMP	Auto timestamp

4. Security Design

Security Layer	Description
Authentication	Supabase Auth (JWT, Email, OAuth)
Role-based Access	Row-level security (RLS) policies on tables
Data Validation	Type-safe data models in API functions
Storage Access	Supabase signed URLs for uploads/downloads
Rate Limiting	Optional per-user API rate limit via Edge Functions

5. API Endpoints (Supabase Edge Functions)

Method	Endpoint	Description
POST	/api/events/create	Create new event
GET	/api/events/list	Fetch events by category
POST	/api/events/rsvp	RSVP to event
GET	/api/members/list	Get all club members
POST	/api/gallery/upload	Upload new gallery image
GET	/api/gallery/all	Fetch gallery media
POST	/api/notifications/send	Send notification (admin only)

6. Deployment Workflow

Frontend: Deployed on Vercel

Backend: Hosted by Supabase Cloud

CI/CD: GitHub Actions workflow for automatic deployment

Environment Variables:

SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
