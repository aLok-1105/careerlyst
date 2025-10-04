# 🚀 Careerlyst - AI-Powered Career Development Platform

<div align="center">
  <img src="/logo.png" alt="Careerlyst Logo" width="200" height="60">
  
  [![Next.js](https://img.shields.io/badge/Next.js-15.1.4-black)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.0.0-blue)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC)](https://tailwindcss.com/)
  [![Prisma](https://img.shields.io/badge/Prisma-6.2.1-2D3748)](https://prisma.io/)
  [![Clerk](https://img.shields.io/badge/Clerk-Auth-purple)](https://clerk.com/)
</div>

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

Careerlyst is a comprehensive AI-powered career development platform that helps professionals advance their careers through intelligent resume building, personalized cover letter generation, and adaptive interview preparation. Built with modern web technologies, it provides industry-specific insights and tailored guidance for career growth.

## ✨ Features

### 🧠 AI-Powered Career Guidance
- Personalized career advice and insights powered by Google's Gemini AI
- Industry-specific recommendations and market analysis
- Real-time salary data and growth trends

### 📝 Smart Resume Creation
- ATS-optimized resume builder with AI assistance
- Markdown-based resume editor with live preview
- PDF export functionality
- Industry-specific templates and suggestions

### 💼 Cover Letter Generator
- AI-generated cover letters tailored to specific job applications
- Company and role-specific customization
- Multiple cover letter templates and styles

### 🎯 Interview Preparation
- Adaptive mock interview system
- Role-specific question generation
- Performance tracking and analytics
- Detailed feedback and improvement tips

### 📊 Industry Insights
- Real-time market trends and analysis
- Salary range data by role and location
- Skill demand analysis
- Career growth projections

## 🛠 Tech Stack

### Frontend
- **Next.js 15.1.4** - React framework with App Router
- **React 19.0.0** - UI library
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### Backend
- **Next.js API Routes** - Server-side API
- **Prisma 6.2.1** - Database ORM
- **PostgreSQL** - Primary database
- **Clerk** - Authentication and user management
- **Inngest** - Background job processing

### AI & External Services
- **Google Gemini AI** - Content generation and analysis
- **Sonner** - Toast notifications
- **html2pdf.js** - PDF generation

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Turbopack** - Fast bundling

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- PostgreSQL database
- Google Gemini API key
- Clerk account for authentication

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/careerlyst.git
   cd careerlyst
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Fill in your environment variables (see [Environment Variables](#environment-variables))

4. **Set up the database**
   ```bash
   npx prisma migrate dev

   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
ai-career-coach/
├── app/                          # Next.js App Router
│   ├── (auth)/                  # Authentication pages
│   ├── (main)/                  # Main application pages
│   │   ├── ai-cover-letter/     # Cover letter features
│   │   ├── dashboard/           # User dashboard
│   │   ├── interview/           # Interview preparation
│   │   ├── onboarding/          # User onboarding
│   │   └── resume/              # Resume builder
│   ├── api/                     # API routes
│   └── lib/                     # Utility functions
├── components/                   # Reusable UI components
│   └── ui/                      # Shadcn UI components
├── actions/                     # Server actions
├── hooks/                       # Custom React hooks
├── lib/                         # Shared utilities
├── prisma/                      # Database schema and migrations
├── public/                      # Static assets
└── data/                        # Static data files
```

## 🔑 Key Features

### User Authentication & Onboarding
- Secure authentication with Clerk
- Industry and skill-based onboarding
- Profile management

### Resume Builder
- Markdown-based editor with live preview
- ATS optimization suggestions
- PDF export functionality
- Industry-specific templates

### Cover Letter Generator
- AI-powered content generation
- Job-specific customization
- Multiple format options
- Company research integration

### Interview Preparation
- Adaptive question generation
- Performance tracking
- Detailed analytics
- Improvement recommendations

### Dashboard & Analytics
- Career progress tracking
- Industry insights
- Performance metrics
- Goal setting and monitoring

## 🔌 API Endpoints

### User Management
- `POST /api/user/update` - Update user profile
- `GET /api/user/status` - Get onboarding status

### Resume Management
- `POST /api/resume/save` - Save resume content
- `GET /api/resume` - Get user resume

### Cover Letters
- `POST /api/cover-letter/generate` - Generate cover letter
- `GET /api/cover-letters` - Get user's cover letters

### Interview Preparation
- `POST /api/interview/quiz` - Generate interview quiz
- `POST /api/interview/result` - Save quiz results

## 🗄 Database Schema

### Core Models
- **User** - User profiles and authentication
- **Resume** - Resume content and metadata
- **CoverLetter** - Generated cover letters
- **Assessment** - Interview quiz results
- **IndustryInsight** - Industry-specific data

### Key Relationships
- User → Resume (1:1)
- User → CoverLetter (1:many)
- User → Assessment (1:many)
- User → IndustryInsight (many:1)

## 🔧 Environment Variables

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/careerlyst"

# Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# AI Services
GEMINI_API_KEY="your-gemini-api-key"

# DATABASE
DATABASE_URL="your-db-url"

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
