# Troubleshooting Notes

## Nginx fails at boot with "host not found in upstream"

A reverse-proxy configuration may fail if DNS is unavailable when Nginx starts. A fully static local site removes this dependency.

## `.mjs` files load as `application/octet-stream`

Browsers reject ES modules with the wrong MIME type, especially with `X-Content-Type-Options: nosniff`. Add an Nginx `.mjs` location with `default_type text/javascript`, or use a compatible classic-script build.

## Street labels render as blocks

MapLibre symbol layers require glyph PBFs. Host glyphs locally and set the style `glyphs` URL to `/fonts/{fontstack}/{range}.pbf` using the exact font-stack directory name.

## SSH alias takes a long time

`.local` resolution may prefer IPv6 before falling back to IPv4 while the firewall permits only IPv4 SSH. A Windows SSH host entry can use `AddressFamily inet` for that alias.

## USB private key rejected as "too open"

FAT32 lacks Windows ACLs. Use NTFS, apply restrictive ACLs, and retest from the USB.

## `PasswordAuthentication no` is ignored

An earlier cloud-init SSH snippet may set `PasswordAuthentication yes`. Use an earlier-loaded hardening file such as `00-onionserver-hardening.conf` and verify with `sshd -T`.

## `sudoers` file reports bad permissions

Files in `/etc/sudoers.d` should normally be mode `0440` and validated with `visudo -c`.
