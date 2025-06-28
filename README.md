# JobBridge - Connect Students with Recruiters

A modern, full-stack web application that bridges the gap between talented students and innovative recruiters through real project showcases.

## 🌟 Features

### For Students
- **Project Portfolio**: Upload and showcase your best projects with GitHub repos, live demos, and detailed descriptions
- **AI-Powered Summaries**: Automatically generate compelling project summaries that highlight key skills
- **Professional Profiles**: Get a shareable profile URL for resumes and networking
- **Analytics Dashboard**: Track profile views, project engagement, and recruiter interest
- **Direct Communication**: Receive messages from interested recruiters

### For Recruiters
- **Advanced Search**: Find candidates by tech stack, university, project type, and experience level
- **Real Project Evaluation**: See actual code quality and project implementations
- **Direct Communication**: Connect with candidates through built-in messaging
- **Team Collaboration**: Share profiles and collaborate on hiring decisions
- **Recruitment Analytics**: Track hiring metrics and candidate engagement

## 🚀 Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **UI Components**: Radix UI, shadcn/ui
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **State Management**: React Query, Context API
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React

## 🎨 Design System

- **Typography**: Poppins (headings), Inter (body)
- **Colors**: Blue/Indigo primary, with violet and green accents
- **Theme**: Light/Dark mode support
- **Layout**: Responsive, mobile-first design
- **Animations**: Smooth transitions and micro-interactions

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Navbar.tsx      # Navigation component
│   ├── Footer.tsx      # Footer component
│   └── ...
├── contexts/           # React contexts
│   └── AuthContext.tsx # Authentication context
├── pages/              # Page components
│   ├── Index.tsx       # Landing page
│   ├── ForStudents.tsx # Student-focused page
│   ├── ForRecruiters.tsx # Recruiter-focused page
│   ├── HowItWorks.tsx  # Process explanation
│   └── ...
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── types/              # TypeScript type definitions
```

## 🛠 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd jobbridge
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on push to main branch

### Netlify
1. Connect repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Enable automatic deploys

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader optimized
- High contrast mode support
- Focus management

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

### Code Style
- ESLint configuration for React/TypeScript
- Prettier for code formatting
- Conventional commit messages

## 🚀 Performance

- **Core Web Vitals optimized**
- **Code splitting** with React.lazy()
- **Image optimization** with proper loading strategies
- **Bundle analysis** with Vite bundle analyzer
- **Lighthouse score**: 95+ across all metrics

## 🔐 Security

- Input validation and sanitization
- XSS protection
- CSRF protection
- Secure authentication flow
- Environment variable management

## 📊 Analytics & Monitoring

- User interaction tracking
- Performance monitoring
- Error boundary implementation
- SEO optimization with meta tags

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide](https://lucide.dev/) for the icon library

## 📞 Support

For support, email hello@jobbridge.app or join our community Discord.

---

Built with ❤️ by the JobBridge team