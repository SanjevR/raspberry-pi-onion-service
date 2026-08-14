# Raspberry Pi Tor Onion Service

A **sanitized public repository** for a small, self-hosted Tor Onion Service running on a Raspberry Pi with Nginx, static HTML/CSS/JavaScript, locally hosted images, PMTiles, MapLibre, OpenStreetMap-derived map data, SSH administration, nftables, and a restricted staff shutdown key.

This repository is designed for public GitHub use. It intentionally excludes all production secrets and organization-specific operational data.

## What this repository demonstrates

- Raspberry Pi OS Lite / Debian server administration
- Tor v3 Onion Service configuration
- Nginx bound to localhost behind Tor
- Static-site hosting with no database or upload endpoint
- Locally hosted interactive maps using PMTiles and MapLibre
- Local map glyphs/fonts
- SSH public-key authentication
- LAN-restricted SSH through nftables
- Root SSH disabled and password SSH disabled
- Automatic security updates
- Emergency recovery-key procedures
- A restricted staff key that can only perform a safe shutdown

## Architecture

```text
Tor Browser
    |
    v
Tor network
    |
    v
Onion Service
    |
    v
Tor daemon on Raspberry Pi
    |
    v
127.0.0.1:8080
    |
    v
Nginx
    |
    v
Static HTML / CSS / JavaScript / local maps
```

## Repository layout

```text
config/      Sanitized example configurations
website/     Sanitized static-site source
scripts/     Helper and operational scripts
docs/        Setup, security, recovery, and staff procedures
```

## Security warning

Never commit or publish:

- Tor Onion Service private identity files
- SSH private keys
- `authorized_keys` from production
- Wi-Fi credentials
- passwords, tokens, or `.env` files
- production backups
- exact internal network details
- staff photographs or personnel records without approval
- asset serial numbers or the full internal equipment inventory
- patient information or ePHI

The examples in this repository use placeholders and non-production values.

## Local maps

The production design uses self-hosted PMTiles, MapLibre, and local glyphs. The large/generated map archives, local fonts, and third-party vendor binaries are intentionally not bundled. See `docs/maps.md` and the README files under `website/maps`, `website/fonts`, and `website/vendor`.

## First commit

See `docs/FIRST_COMMIT.md` and run the included public-repo safety scan before pushing.

## License

No license has been selected in this package. Add an appropriate license before accepting outside reuse or contributions.
