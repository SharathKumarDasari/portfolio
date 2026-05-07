# Portfolio

A modern, responsive portfolio website built with React.js and Tailwind CSS, showcasing the skills and projects of a Computer Science Engineering student.

## 🚀 Features

- **Modern Design**: Clean, professional interface with gradient backgrounds and glass morphism effects
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Interactive Navigation**: Smooth scrolling navigation with active states
- **Skills Showcase**: Visual representation of technical skills with proficiency levels
- **Project Gallery**: Featured projects with technology tags and links
- **Contact Form**: Professional contact section with social media links
- **Performance Optimized**: Fast loading with optimized assets

## 🛠️ Technologies Used

- **Frontend**: React.js, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Development**: ESLint, PostCSS

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (version 16 or higher)
- npm or yarn package manager

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/SharathKumarDasari/portfolio.git
   cd project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Hero.tsx            # Hero section with introduction
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills and technologies
│   ├── Projects.tsx        # Featured projects
│   └── Contact.tsx         # Contact information and form
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
└── index.css              # Global styles and Tailwind imports
```

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`src/components/Hero.tsx`):
   - Change the name and title
   - Update the description
   - Modify social media links

2. **About Section** (`src/components/About.tsx`):
   - Update education details
   - Modify personal information
   - Change location and other details

3. **Skills Section** (`src/components/Skills.tsx`):
   - Add/remove technologies
   - Update proficiency levels
   - Modify skill categories

4. **Projects Section** (`src/components/Projects.tsx`):
   - Replace with your actual projects
   - Update project descriptions
   - Add real GitHub and demo links
   - Replace placeholder images

5. **Contact Section** (`src/components/Contact.tsx`):
   - Update email and phone number
   - Modify social media links
   - Change location information

### Styling

The portfolio uses Tailwind CSS for styling. Key design elements:

- **Colors**: Blue (#3B82F6) and Purple (#8B5CF6) gradient theme
- **Background**: Dark theme with gradient overlays
- **Typography**: Clean, modern font hierarchy
- **Animations**: Smooth transitions and hover effects

To customize colors, modify the gradient classes throughout the components:
- `from-blue-400 to-purple-400` for text gradients
- `from-blue-500 to-purple-600` for button gradients
- `bg-slate-800/50` for card backgrounds

### Images

Replace the placeholder images in the Projects section:
1. Use your own project screenshots
2. Recommended size: 800x600px
3. Use services like Pexels, Unsplash, or your own images
4. Update the `image` property in the projects array

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Deployment Options

1. **Netlify**: Drag and drop the `dist` folder
2. **Vercel**: Connect your GitHub repository
3. **GitHub Pages**: Use GitHub Actions for deployment
4. **Firebase Hosting**: Use Firebase CLI

### Environment Variables

If you add any APIs or external services, create a `.env` file:

```env
VITE_EMAIL_SERVICE_ID=your_service_id
VITE_EMAIL_TEMPLATE_ID=your_template_id
VITE_EMAIL_PUBLIC_KEY=your_public_key
```

## 📧 Contact Form Integration

To make the contact form functional, you can integrate with:

1. **EmailJS**: For client-side email sending
2. **Formspree**: Simple form handling service
3. **Netlify Forms**: If deployed on Netlify
4. **Custom Backend**: Node.js/Express server

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- **React.js** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Vite** - Fast build tool
- **Pexels** - Stock photos for project placeholders


