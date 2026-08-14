# Architecture

## Request path

```text
Tor Browser
  -> Tor network
  -> Onion Service
  -> Tor daemon
  -> 127.0.0.1:8080
  -> Nginx
  -> static website files
```

## Design choices

- Nginx listens only on loopback.
- The Onion Service forwards port 80 to local Nginx.
- The public site is static and has no database, upload form, or administrator panel.
- Interactive maps are stored locally as PMTiles.
- Map glyphs and JavaScript libraries are locally hosted.
- SSH administration is restricted to a trusted LAN by nftables.
- Normal SSH uses public keys only.
- A separate recovery key is stored offline.
- A dedicated staff key is restricted to a forced safe-shutdown command.
