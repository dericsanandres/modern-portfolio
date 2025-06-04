# Portfolio Configuration Guide

## Easy Portfolio Updates

This portfolio now uses a centralized configuration system that makes it easy to update your information without touching multiple files.

### Main Config File: `src/configs/portfolio.ts`

This file contains all your portfolio information in one place:

## ✅ What You Can Easily Update:

### Personal Information
```typescript
personal: {
  name: 'Your Name',
  title: 'Your Job Title',
  description: 'Your bio/description',
  email: 'your@email.com',
  location: 'Your Location',
  resumeUrl: '/assets/resume.pdf'
}
```

### Social Links
```typescript
socials: {
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourusername',
  instagram: 'https://instagram.com/yourusername',
  // etc...
}
```

### Theme Colors
```typescript
theme: {
  colors: {
    primary: '#ad5aff',        // Main accent color
    secondary: '#ffb2de',      // Secondary color
    // etc...
  }
}
```

### Navigation Sections
```typescript
navigation: [
  { name: 'About', url: '/#about' },
  { name: 'Technologies', url: '/#technologies' },
  // etc...
]
```

## Content That Still Uses Separate Files:

- **Projects**: `src/constants/projects.ts`
- **Experience**: `src/constants/experience.ts` 
- **Technologies**: `src/constants/other.ts`

## How to Update:

1. **Personal Info**: Edit `src/configs/portfolio.ts`
2. **Projects**: Edit `src/constants/projects.ts`
3. **Work Experience**: Edit `src/constants/experience.ts`
4. **Colors**: Edit the theme section in `src/configs/portfolio.ts`

## Benefits:

- ✅ Single source of truth for personal info
- ✅ Easy to maintain and update
- ✅ No need to hunt through multiple files
- ✅ Consistent data across components
- ✅ Type-safe configuration
