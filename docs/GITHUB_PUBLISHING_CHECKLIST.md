# GitHub Publishing Checklist

- [ ] Confirm the repository contains only sanitized files.
- [ ] Confirm the live Onion address is absent unless intentionally publicized.
- [ ] Confirm no Tor identity files are present.
- [ ] Confirm no SSH private keys are present.
- [ ] Confirm no real `authorized_keys` entries are present.
- [ ] Confirm no Wi-Fi credentials, passwords, tokens, or `.env` files are present.
- [ ] Confirm no production screenshots, logs, or shell history are present.
- [ ] Confirm no real staff photographs or patient information are present.
- [ ] Confirm no serial numbers or full internal inventory are present.
- [ ] Run `scripts/verify-public-repo.ps1` on Windows or `scripts/verify-public-repo.sh` on Linux.
- [ ] Run `git status`.
- [ ] Stage files explicitly rather than using an unreviewed `git add .`.
- [ ] Run `git diff --cached --stat`.
- [ ] Run `git diff --cached` and review every staged line.
- [ ] Add a license only after deciding how others may reuse the code.
