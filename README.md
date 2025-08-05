# Amaramba User Dashboard

A modern, secure authentication system built with Next.js and Hero UI components. This project implements a comprehensive multi-step authentication flow for a real-world SaaS application.

## Features

### 🔐 Multi-Step Registration Flow
- **Email Verification**: `/register/email` - Email input with OTP request
- **OTP Verification**: `/register/verify-otp` - 6-digit OTP verification
- **Password Setup**: `/register/set-password` - Secure password creation
- **Onboarding**: `/register/onboarding` - Additional user information and reCAPTCHA

### 🔑 Multi-Step Login Flow
- **Login**: `/login` - Email, password, and reCAPTCHA verification
- **MFA**: `/login/mfa` - Two-factor authentication with 6-digit code

### 🧠 Authentication Context
- Centralized auth state management
- Automatic token storage and retrieval
- JWT token decoding and user data extraction
- Protected route handling

### 🚪 Logout Support
- Secure token cleanup
- API logout call
- Automatic redirect to login

## Tech Stack

- **Frontend**: Next.js 15 with App Router
- **UI Components**: Hero UI
- **Authentication**: JWT tokens with localStorage
- **Form Validation**: Client-side validation with error handling
- **reCAPTCHA**: Google reCAPTCHA v2 integration
- **TypeScript**: Full type safety

## Project Structure

```
├── app/
│   ├── register/
│   │   ├── email/page.tsx
│   │   ├── verify-otp/page.tsx
│   │   ├── set-password/page.tsx
│   │   └── onboarding/page.tsx
│   ├── login/
│   │   ├── page.tsx
│   │   └── mfa/page.tsx
│   ├── dashboard/page.tsx
│   └── layout.tsx
├── components/
│   ├── auth/
│   │   └── ProtectedRoute.tsx
│   └── ui/
│       ├── AuthLayout.tsx
│       └── OtpInput.tsx
├── context/
│   └── AuthContext.tsx
├── services/
│   └── api.ts
├── types/
│   └── auth.ts
├── utils/
│   ├── storage.ts
│   └── decryptToken.ts
└── env.example
```

## API Endpoints

The frontend expects the following REST API endpoints:

- `POST /api/auth/request-otp` - Request OTP for registration
- `POST /api/auth/verify-otp` - Verify OTP during registration
- `POST /api/auth/set-password` - Set password during registration
- `POST /api/auth/onboarding` - Complete user onboarding
- `POST /api/auth/login` - User login
- `POST /api/auth/mfa` - MFA verification
- `POST /api/auth/logout` - User logout
- `GET /api/auth/profile` - Get user profile

## Environment Variables

Create a `.env.local` file with the following variables:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3001/api

# Google reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp env.example .env.local
   # Edit .env.local with your actual values
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Authentication Flow

### Registration Process
1. User enters email → OTP sent
2. User verifies OTP → Email confirmed
3. User sets password → Account created
4. User completes onboarding → Registration complete

### Login Process
1. User enters credentials → Initial authentication
2. If MFA enabled → User enters MFA code
3. User authenticated → Redirect to dashboard

## Key Components

### AuthContext
Manages global authentication state, token storage, and user data.

### ProtectedRoute
Handles route protection and automatic redirects based on authentication status.

### AuthLayout
Reusable layout component for authentication pages with consistent styling.

### OtpInput
Custom OTP input component with auto-focus and validation.

## Security Features

- JWT token-based authentication
- Secure token storage in localStorage
- Automatic token expiration handling
- reCAPTCHA integration for bot protection
- Multi-factor authentication support
- Protected routes with automatic redirects

## Development Notes

- All API calls are treated as external HTTP requests
- No backend code is generated or included
- Uses Hero UI components exclusively (no MUI or NextAuth)
- Each authentication step is a separate route
- Clean, scalable folder structure
- Full TypeScript support

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
"# amaramba_frontend" 
