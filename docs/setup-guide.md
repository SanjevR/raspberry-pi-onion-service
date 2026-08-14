# Setup Guide

## 1. Install and update the operating system

```bash
sudo apt update
sudo apt full-upgrade -y
```

## 2. Install core services

```bash
sudo apt install nginx tor openssh-server nftables unattended-upgrades -y
```

## 3. Create the static-site directory

```bash
sudo mkdir -p /var/www/example-onion-site
sudo chown -R "$USER":"$USER" /var/www/example-onion-site
```

Copy the sanitized website files into that directory and replace placeholders privately.

## 4. Configure Nginx

Copy and adapt `config/nginx-onion-site.example`, enable the site, test it, and restart Nginx:

```bash
sudo nginx -t
sudo systemctl restart nginx
```

## 5. Configure Tor

Add the equivalent of `config/torrc.example` to `/etc/tor/torrc`, verify the configuration, and restart Tor:

```bash
sudo tor --verify-config -f /etc/tor/torrc
sudo systemctl restart tor@default
```

## 6. Protect the Onion identity

The `HiddenServiceDir` contains the Onion identity. Never publish it. Back it up only to encrypted, offline recovery storage.

## 7. Configure firewall and SSH

Follow `docs/security-hardening.md` and replace the example subnet with the actual trusted LAN.
