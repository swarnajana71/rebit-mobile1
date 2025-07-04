# Project Architecture Guide

## Overview

This is a full-stack web application built with React and Express, featuring a modern TypeScript-based architecture. The project uses a monorepo structure with separate client and server directories, sharing common types and schemas through a shared directory. The application utilizes PostgreSQL with Drizzle ORM for database operations and includes a comprehensive UI component library built with Radix UI and Tailwind CSS.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state
- **Styling**: Tailwind CSS with custom design tokens
- **UI Components**: Radix UI primitives with custom shadcn/ui components
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Express sessions with PostgreSQL store
- **Development**: Hot reload with Vite middleware integration

### Database Architecture
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Migrations**: Managed through Drizzle Kit
- **Schema**: Centralized in shared directory for type safety

## Key Components

### Project Structure
```
├── client/          # React frontend application
├── server/          # Express backend application
├── shared/          # Shared types and schemas
├── migrations/      # Database migrations
├── dist/           # Built production assets
└── node_modules/   # Dependencies
```

### Core Services
1. **Storage Interface**: Abstracted data access layer with in-memory implementation for development
2. **API Client**: Centralized HTTP client with error handling and authentication
3. **Component Library**: Comprehensive UI components with consistent styling
4. **Form Management**: React Hook Form with Zod validation

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- **Extensible Design**: Schema designed for easy extension with additional entities

## Data Flow

### Client-Server Communication
1. Client makes HTTP requests to `/api/*` endpoints
2. Server processes requests using storage interface
3. Responses are cached and managed by TanStack Query
4. Error handling is centralized in API client

### State Management
- **Server State**: Managed by TanStack Query with automatic caching
- **Client State**: Local React state for UI interactions
- **Form State**: React Hook Form for form management

### Authentication Flow
- Session-based authentication with PostgreSQL session store
- Credentials included in API requests
- Error handling for unauthorized access

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database driver
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: UI primitive components
- **drizzle-orm**: Type-safe database ORM
- **wouter**: Lightweight client-side routing
- **zod**: Runtime type validation

### Development Dependencies
- **Vite**: Build tool and development server
- **TypeScript**: Type checking and compilation
- **Tailwind CSS**: Utility-first CSS framework
- **ESBuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Development Environment
- **Dev Server**: Vite development server with Express middleware
- **Hot Reload**: Automatic reloading for both client and server code
- **Database**: Local PostgreSQL instance or Neon serverless

### Production Build
- **Client Build**: Vite builds React app to `dist/public`
- **Server Build**: ESBuild bundles Express server to `dist/index.js`
- **Static Assets**: Served directly by Express in production

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment mode (development/production)
- **Session Configuration**: Secure session management with PostgreSQL store

## Changelog

```
Changelog:
- July 04, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```

## Notes for Development

- The application uses a storage interface pattern, making it easy to switch from in-memory storage to PostgreSQL
- All database operations are type-safe through Drizzle ORM
- The UI components follow a consistent design system with custom color variables
- Error handling is centralized and provides clear feedback to users
- The build process optimizes for both development experience and production performance