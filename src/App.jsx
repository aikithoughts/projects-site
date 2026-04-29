import { useState, useEffect } from "react";
import projects from "./projects.js";
import "./App.css";

const GITHUB_USER = "aikithoughts";

function ProjectCard({ project, githubData, loading }) {
  const repoUrl = `https://github.com/${GITHUB_USER}/${project.repo}`;
  const displayName = githubData?.name || project.repo;
  const formattedName = displayName
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <article className="project-card">
      <div className="project-card-inner">
        <div className="project-meta">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <h2 className="project-title">{formattedName}</h2>

        <p className="project-description">{project.description}</p>

        <div className="project-links">
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub →
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link project-link--demo"
            >
              Live demo →
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function App() {
  const [githubData, setGithubData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all repos from GitHub API
    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100`)
      .then((res) => res.json())
      .then((repos) => {
        const data = {};
        repos.forEach((repo) => {
          data[repo.name] = repo;
        });
        setGithubData(data);
        setLoading(false);
      })
      .catch(() => {
        // If API fails, still show the page with local data
        setLoading(false);
      });
  }, []);

  return (
    <div className="page">
      <header className="site-header">
        <nav className="site-nav">
          <a href="https://daveshevitz.com">← Dave Shevitz</a>
        </nav>
      </header>

      <main className="main-content">
        <div className="page-header">
          <h1 className="page-title">Coding Projects</h1>
          <p className="page-subtitle">
            I build tools to solve problems I actually have — for managing
            content, running D&D sessions, and exploring what's possible with
            code.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.repo}
              project={project}
              githubData={githubData[project.repo]}
              loading={loading}
            />
          ))}
        </div>
      </main>

      <footer className="site-footer">
        <p>
          <a
            href={`https://github.com/${GITHUB_USER}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/{GITHUB_USER}
          </a>
        </p>
      </footer>
    </div>
  );
}
