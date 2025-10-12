# Nuvio - Freelance Team Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This project showcases our freelance team's capabilities and services to attract potential clients.

## 🚀 Features

- **Modern Design**: Clean, professional interface optimized for conversions
- **Responsive Layout**: Perfectly optimized for all devices (desktop, tablet, mobile)
- **Performance Optimized**: Built with Next.js for fast loading and SEO
- **TypeScript**: Type-safe development for better code quality
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Component-Based**: Reusable React components for maintainability

## 🛠️ Technology Stack

- **Framework**: Next.js 15.5.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Font**: Inter (Google Fonts)
- **Linting**: ESLint with Next.js configuration

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nuvio-portfolio-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
nuvio-portfolio-nextjs/
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout component
│   │   └── page.tsx          # Home page
│   └── components/
│       ├── Header.tsx        # Navigation header
│       └── Footer.tsx        # Site footer
├── public/                   # Static assets
├── package.json             # Dependencies and scripts
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.ts          # Next.js configuration
```

## 🎨 Features Overview

### Home Page
- **Hero Section**: Compelling introduction with call-to-action buttons
- **Services Preview**: Overview of our core services and capabilities
- **Why Choose Us**: Key benefits and competitive advantages
- **Contact CTA**: Clear path for potential clients to get in touch

### Components
- **Header**: Responsive navigation with mobile menu
- **Footer**: Company information, quick links, and contact details

## 🚀 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🎯 SEO Optimization

- Semantic HTML structure
- Optimized meta tags and descriptions
- Fast loading performance
- Mobile-friendly design
- Accessible components

## 🔧 Customization

### Adding New Pages
1. Create a new folder in `src/app/`
2. Add a `page.tsx` file in the new folder
3. Update navigation in `Header.tsx`

### Styling
- Use Tailwind CSS utility classes
- Custom styles can be added to `globals.css`
- Component-specific styles using Tailwind

### Components
- Create reusable components in `src/components/`
- Follow TypeScript interfaces for props
- Maintain consistent styling patterns

## 🌟 Future Enhancements

- [ ] About page with team information
- [ ] Services page with detailed offerings
- [ ] Portfolio page with project showcases
- [ ] Team page with member profiles
- [ ] Contact page with form and information
- [ ] Blog/News section
- [ ] Client testimonials
- [ ] Case studies
- [ ] Multi-language support

## 📄 License

This project is proprietary software owned by Nuvio. All rights reserved.

## 🤝 Contact

For questions about this project or our services, please visit [http://localhost:3000](http://localhost:3000) or reach out to our team.

---

Built with ❤️ by the Nuvio team
