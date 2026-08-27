# I2P Deployment Notes

This repository documents a sanitized dual-network deployment in which the same Nginx-backed static site is available through both a Tor v3 Onion Service and an I2P HTTP server tunnel.

## Architecture

```text
Static site
    |
    v
Nginx 127.0.0.1:8080
   / \
  /   \
Tor   i2pd
 |      |
.onion  .b32.i2p / human-readable .i2p name
```

## Example i2pd tunnel

See `config/i2pd-windsor-medical.example.conf`.

The production tunnel uses a persistent destination key file so the I2P destination remains stable. That private key file must never be published.

## Human-readable I2P names

A `.i2p` hostname is an address-book mapping to the underlying I2P destination. The cryptographic `.b32.i2p` destination remains the underlying identity.

## Public repository safety

Do not commit:

- production I2P destination key files
- live Base64 destination records when they are operationally sensitive
- production Onion identity files
- SSH private keys
- patient information or ePHI
- internal network credentials or secrets

This repository intentionally uses placeholders for live service addresses.
