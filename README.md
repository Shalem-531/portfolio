# Badugu Shalem Raju — React Portfolio

A clean, structured React portfolio built with Vite. The portfolio keeps the same content, colors, layout, and animations as the original version, but the code has been reorganized into reusable components and separate data files for better maintainability.

## Project Structure

```text
portfolio-project/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── images/
│       ├── shalem.jpg
│       ├── local-service-hub.png
│       ├── chat-app.png
│       └── ecommerce.png
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── Projects.jsx
    │   ├── Skills.jsx
    │   ├── About.jsx
    │   ├── FAQ.jsx
    │   ├── Contact.jsx
    │   └── Footer.jsx
    ├── data/
    │   └── data.js
    └── hooks/
```
## Getting Started
Install the project dependencies:
```bash
npm install
```
Start the development server:
```bash
npm run dev
```
## Data Management
Portfolio content is centralized in `src/data/data.js`. This makes it easy to update personal information, projects, skills, experience, certifications, education, and FAQs without having to modify the individual components.
## Highlights
* Built with React and Vite
* Reusable and organized components
* Centralized portfolio data
* Responsive design
* Same visual style, layout, and animations as the original portfolio
* Easy to maintain and update
```
This version sounds more like a **real developer README** and less like generated documentation.
```
