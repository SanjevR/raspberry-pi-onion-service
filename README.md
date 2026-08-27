# Raspberry Pi Tor + I2P Privacy Network Service

A **sanitized public repository** for a small, self-hosted privacy-network website running on a Raspberry Pi with Nginx, static HTML/CSS/JavaScript, locally hosted images, PMTiles, MapLibre, OpenStreetMap-derived map data, Tor, i2pd/I2P, SSH administration, nftables, and a restricted staff shutdown key.

The same local Nginx site can be reached through both a Tor v3 Onion Service and an I2P HTTP server tunnel. This repository is designed for public GitHub use and intentionally excludes all production secrets and organization-specific operational data.

## What this repository demonstrates

- Raspberry Pi OS Lite / Debian server administration
- Tor v3 Onion Service configuration
- i2pd / I2P HTTP server tunnel configuration
- Nginx bound to localhost behind Tor and I2P
- One static site served through multiple privacy networks
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
                      Static HTML / CSS / JavaScript
                                  |
                                  v
                         Nginx 127.0.0.1:8080
                           /               \
                          /                 \
                 Tor daemon                 i2pd
                     |                       |
             Tor Onion Service        I2P HTTP tunnel
                     |                       |
                 .onion                 .b32.i2p / .i2p
```

The human-readable `.i2p` name is an address-book mapping to the underlying I2P destination. Production Onion identities, I2P destination key files, and live service addresses are intentionally omitted from this repository.

## Repository layout

```text
config/      Sanitized example configurations
website/     Sanitized static-site source
scripts/     Helper and operational scripts
docs/        Setup, security, recovery, I2P, and staff procedures
```

## Security warning

Never commit or publish:

- Tor Onion Service private identity files
- I2P destination identity/key files (for example `*.dat` used as tunnel keys)
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

## Privacy-network public text

A shared site can use neutral wording such as **“Privacy Network Site”** instead of identifying itself only as a Tor Onion Service. Public-facing pages may list both the official Onion address and the human-readable I2P name, while keeping all private identity files off the public repository.

## First commit

See `docs/FIRST_COMMIT.md` and run the included public-repo safety scan before pushing.

## License

No license has been selected in this package. Add an appropriate license before accepting outside reuse or contributions.
