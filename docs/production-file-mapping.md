# Production-to-Repository Mapping

| Production item | Public-repository equivalent |
|---|---|
| Static website directory | `website/` sanitized demo |
| Nginx site configuration | `config/nginx-onion-site.example` |
| Tor configuration | `config/torrc.example` |
| nftables rules | `config/nftables.conf.example` |
| SSH hardening snippet | `config/sshd/00-onionserver-hardening.conf.example` |
| Staff shutdown wrapper | `scripts/staff-onion-shutdown` |
| Staff sudoers rule | `config/sudoers/staffshutdown.example` |
| Staff `authorized_keys` line | `config/authorized_keys/staffshutdown.example` |
| Local map JavaScript | `website/js/maps.js` |
| Production PMTiles and glyphs | intentionally omitted |
| Production images | intentionally omitted |
| Onion identity | never committed |
| SSH keys | never committed |
