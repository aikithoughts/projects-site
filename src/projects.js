// Curated list of projects to feature.
// To add or remove a project, edit this file.
~/projects-site/src / projects.js// 'repo' must match the exact GitHub repository name.
// 'demo' is optional — set to null if there's no live demo.

const projects = [
  {
    repo: "calendar-and-project-tracker",
    description: "A lightweight content calendar and project tracker built without frameworks — no React, no build step. Just HTML, CSS, and JavaScript, with two JSON files driving all the data. Includes stream filtering, task cards with progress tracking, and localStorage persistence.",
    demo: null,
    tags: ["JavaScript", "CSS", "HTML"],
  },
  {
    repo: "encounter-tracker-cli",
    description: "A Python command-line tool for managing D&D combat encounters in real time. Tracks initiative order, hit points, and status effects across a full session. Built with a modular architecture, color-coded terminal output, and fuzzy name matching for fast input during live play.",
    demo: null,
    tags: ["Python", "CLI"],
  },
  {
    repo: "pdf-to-speech",
    description: "A browser-based tool that converts PDF documents to spoken audio using the Web Speech API. No server required — everything runs locally. Upload a PDF, and the app extracts and reads the text aloud.",
    demo: "https://pdf-to-speech-five.vercel.app",
    tags: ["JavaScript", "HTML", "Web Speech API"],
  },
  {
    repo: "qr-code-generator",
    description: "A simple, clean QR code generator that runs entirely in the browser. Enter any URL or text and get an instant, downloadable QR code. Built with vanilla JavaScript and CSS.",
    demo: "https://qr-code-generator-umber.vercel.app",
    tags: ["JavaScript", "CSS", "HTML"],
  },
  {
    repo: "art-deco",
    description: "An experiment in generating Art Deco–inspired geometric patterns and visual compositions using JavaScript and CSS. A creative coding project exploring symmetry, ornament, and algorithmic design.",
    demo: "https://art-deco-delta.vercel.app",
    tags: ["JavaScript", "CSS", "Creative Coding"],
  },
  {
    repo: "rewrite",
    description: "A browser-based writing assistant powered by Claude. Select any text, generate three alternatives, and click to replace. Supports a custom style guide to shape suggestions toward your preferred voice and tone.",
    demo: "https://rewrite-virid.vercel.app",
    tags: ["React", "TipTap", "Anthropic API", "Vercel"],
  },
];

export default projects;
