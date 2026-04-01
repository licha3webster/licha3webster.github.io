# Central Luzon Portal (GitHub Pages Ready)

This project is now set up for GitHub Pages hosting.

## Entry Point
- Root page: `index.html`
- It redirects to: `HTML/Homepage.html`

## Publish On GitHub Pages
1. Push this project to a GitHub repository.
2. Open the repository on GitHub.
3. Go to `Settings` -> `Pages`.
4. Under **Build and deployment**:
   - Source: `Deploy from a branch`
   - Branch: `main` (or your default branch)
   - Folder: `/ (root)`
5. Click `Save`.
6. Wait for deployment, then open your site URL from the Pages section.

## Notes
- Keep the folder structure exactly as-is (`HTML`, `STYLE`, `SCRIPT`, images, videos).
- `Credentials.html` is linked in the footer on all major pages.
- `.nojekyll` is included to avoid Jekyll processing issues.
- `.gitignore` ignores large backup ZIP files and editor temp files.
