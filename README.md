# PrimeX Ltd - Corporate Website

A clean, professional corporate website for PrimeX Ltd, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel (recommended)

## 📋 Features

- ✅ Clean, modern corporate design
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ SEO optimized
- ✅ Fast page loads
- ✅ Contact form with API route
- ✅ Demo booking via Contact page + WhatsApp
- ✅ 5 ERP module showcase pages
- ✅ Privacy Policy & Terms of Service pages

## 📁 Project Structure

```
primex-website/
├── app/
│   ├── about/              # About page
│   ├── api/
│   │   └── contact/        # Contact form API
│   ├── contact/            # Contact page
│   ├── erp/                # ERP ecosystem page
│   ├── privacy/            # Privacy policy
│   ├── terms/              # Terms of service
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   ├── Footer.tsx          # Footer component
│   └── Navbar.tsx          # Navigation component
├── public/                 # Static assets
├── .env.local              # Environment variables (create this)
├── next.config.js
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create environment variables file:**
   ```bash
   # Create .env.local file in the root directory
   # Add the following variables (optional for email functionality):
   
   SMTP_HOST=your-smtp-host
   SMTP_PORT=587
   SMTP_USER=your-smtp-username
   SMTP_PASS=your-smtp-password
   SMTP_FROM=noreply@primexltd.com
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 Email Configuration (Contact Forms)

The contact form currently logs submissions to the console. To enable email functionality:

### Option 1: Using Nodemailer

1. Install nodemailer:
   ```bash
   npm install nodemailer
   npm install --save-dev @types/nodemailer
   ```

2. Uncomment the email code in:
   - `app/api/contact/route.ts`

3. Configure SMTP credentials in `.env.local`

### Option 2: Using SendGrid

1. Install SendGrid:
   ```bash
   npm install @sendgrid/mail
   ```

2. Add your SendGrid API key to `.env.local`:
   ```
   SENDGRID_API_KEY=your-api-key
   ```

3. Update the API routes to use SendGrid

### Option 3: Using Resend (Recommended)

1. Install Resend:
   ```bash
   npm install resend
   ```

2. Add your Resend API key to `.env.local`:
   ```
   RESEND_API_KEY=your-api-key
   ```

3. Update the API routes to use Resend

## 🎨 Customization

### Colors

Update brand colors in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Customize these values
    500: '#0ea5e9',
    600: '#0284c7',
    // ...
  },
}
```

### Content

- **Company Information:** Update in components and pages
- **Contact Details:** Modify in `components/Footer.tsx` and `app/contact/page.tsx`
- **ERP Modules:** Edit descriptions in `app/erp/page.tsx`
- **Metadata:** Update SEO information in each page's `metadata` export

### Logo

Replace the logo placeholder in `components/Navbar.tsx` and `components/Footer.tsx` with your actual logo image.

## 📦 Build for Production

```bash
# Create optimized production build
npm run build

# Test production build locally
npm start
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables in Vercel dashboard
5. Deploy!

### Deploy to Other Platforms

- **Netlify:** Add `publish = ".next"` to `netlify.toml`
- **AWS:** Use AWS Amplify or EC2 with PM2
- **Docker:** Create a Dockerfile for containerized deployment

## 🔧 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📝 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Email Configuration (Optional)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-username
SMTP_PASS=your-password
SMTP_FROM=noreply@primexltd.com

# Or use a service like SendGrid/Resend
SENDGRID_API_KEY=your-api-key
# or
RESEND_API_KEY=your-api-key
```

## 🤝 Support

For issues or questions:
- Email: support@primexltd.com
- Website: [www.primexltd.com](https://www.primexltd.com)

## 📄 License

© 2026 PrimeX Ltd. All rights reserved.

---

Built with ❤️ using Next.js and Tailwind CSS
