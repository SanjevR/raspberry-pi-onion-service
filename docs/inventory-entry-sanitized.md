# Sanitized Inventory Entry — Raspberry Pi Onion Server

**Asset ID:** EXAMPLE-SRV-001  
**Device:** Raspberry Pi Onion Service Server  
**Location:** Internal office location withheld from public repository  
**Model:** Raspberry Pi 4 Model B  
**Memory:** 2 GB  
**Operating System:** Raspberry Pi OS Lite / Debian GNU/Linux  
**Status:** Active / operational / hardened

## Purpose

Dedicated low-power server hosting a public informational Tor Onion Service.

## Software

- Nginx
- Tor
- OpenSSH
- nftables
- NetworkManager
- unattended-upgrades
- MapLibre and PMTiles support

## Security

- Nginx loopback-only
- default-drop firewall
- SSH restricted to trusted LAN
- primary and offline recovery SSH keys
- root SSH disabled
- password SSH disabled
- automatic security updates
- restricted staff shutdown key

## Data restrictions

The server is not intended for patient records, ePHI, confidential office records, uploads, or general-purpose storage.

The full internal inventory, serial numbers, network addresses, and production Onion identity are intentionally excluded from the public repository.
