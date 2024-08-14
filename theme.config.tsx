import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import lightlogo from './lightlogo.svg'
import darklogo from './darklogo.svg'
const Logo: React.FC = () => {
  return (
    <span style={{ display: 'flex', alignItems: 'center' }}>
      <img src={darklogo.src} alt="Dark Logo" className="logo dark-logo" />
      <img src={lightlogo.src} alt="Light Logo" className="logo light-logo" />
      <style jsx>{`
        .logo {
          height: 32px;
          width: auto;
          max-width: 150px;
          object-fit: contain;
        }
        .dark-logo { display: none; }
        .light-logo { display: inline-block; }
        :global(.dark) .dark-logo { display: inline-block; }
        :global(.dark) .light-logo { display: none; }
      `}</style>
    </span>
  )
}
const config: DocsThemeConfig = {
  logo: Logo,
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    component: null, //removing default footer
  },
  sidebar: {
    titleComponent({ title }) {
      return <>{title}</>
    }
  },
  primaryHue: 262,
  
  // Remove "Question? Give us feedback →" link
  feedback: {
    content: null
  },
  
  // Remove "Edit this page" link
  editLink: {
    component: null
  },
  // Enable dark mode
  darkMode: true,

  useNextSeoProps() {
    return {
      titleTemplate: 'FormAI'
    }
  },

  // Set the default theme to dark
  nextThemes: {
    defaultTheme: 'dark',
  }
}

export default config
