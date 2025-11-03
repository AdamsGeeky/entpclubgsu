# 🧠 System Design — GSU Entrepreneurship Club Website

## 📘 Overview

The **GSU Entrepreneurship Club Website** is a full-stack web application built to streamline the operations of the Gombe State University (GSU) Entrepreneurship Club.  
It empowers students, administrators, and executives to manage memberships, explore events, and showcase entrepreneurial achievements — all within an elegant, user-friendly interface.

This document outlines the **technical system design**, **architecture**, **data flow**, and **project documentation standards** to ensure a scalable, maintainable, and secure system.

---

## 🏗️ 1. System Architecture

**Architecture Pattern:** Modular MVC + API-driven (with React frontend and Supabase backend)

**Tech Stack Summary:**

| Layer | Technology |
|-------|-------------|
| **Frontend** | React (Next.js), TailwindCSS, Framer Motion |
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
