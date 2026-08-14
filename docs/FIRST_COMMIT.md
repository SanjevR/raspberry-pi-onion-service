# First Commit Commands

From the repository root:

```bash
git init
git status
```

Run a safety scan:

```powershell
.\scripts\verify-public-repo.ps1
```

or:

```bash
./scripts/verify-public-repo.sh
```

Stage expected content explicitly:

```bash
git add README.md SECURITY.md SANITIZATION.md MANIFEST.md
git add .gitignore .gitattributes
git add config docs scripts website
```

Review:

```bash
git status
git diff --cached --stat
git diff --cached
```

Commit:

```bash
git commit -m "Initial sanitized Raspberry Pi Onion Service project"
```

Create an empty GitHub repository, then add the remote supplied by GitHub and push. Do not paste credentials into the remote URL.
