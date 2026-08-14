# Security Hardening

## Completed design goals

- Nginx bound to `127.0.0.1`
- Tor SOCKS listener bound to localhost
- nftables default-drop inbound policy
- SSH allowed only from the trusted LAN
- public-key authentication enabled
- direct root SSH disabled
- password SSH disabled
- keyboard-interactive SSH disabled
- automatic security updates enabled
- Onion identity files owned by the Tor service account with restrictive permissions
- unnecessary Bluetooth service disabled

## SSH hardening

Use an early-loaded snippet such as:

```text
/etc/ssh/sshd_config.d/00-onionserver-hardening.conf
```

with the contents in `config/sshd/00-onionserver-hardening.conf.example`.

Some Raspberry Pi images include a cloud-init snippet that sets `PasswordAuthentication yes`. OpenSSH generally uses the first obtained value, so verify effective settings with:

```bash
sudo sshd -T | grep -E 'permitrootlogin|pubkeyauthentication|passwordauthentication|kbdinteractiveauthentication'
```

Always keep an existing SSH session open while testing a new connection after changes.

## Firewall

Replace the example LAN subnet in `config/nftables.conf.example`, test syntax, load it, and verify a second SSH connection before closing the first session.

## Updates

Enable unattended upgrades and test with:

```bash
sudo unattended-upgrade --dry-run --debug
```

## Network isolation

For a higher-assurance deployment, place the server on a dedicated VLAN or isolated server/IoT network that cannot initiate connections to sensitive workstations.
