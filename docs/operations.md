# Operations and Maintenance

## Health check

```bash
vcgencmd measure_temp
systemctl is-active nginx
systemctl is-active tor@default
systemctl is-active nftables
uptime
```

## Service status

```bash
systemctl status nginx --no-pager
systemctl status tor@default --no-pager
systemctl status nftables --no-pager
```

## Port audit

```bash
sudo ss -tulpn
```

Expected high-level pattern:

- Nginx on loopback only
- Tor SOCKS on loopback only
- SSH listening, with firewall restriction to the trusted LAN
- normal DHCP/mDNS networking traffic

## Temperature

A lightly loaded Raspberry Pi with active cooling should typically remain well below thermal-throttling temperatures. Record actual observations in private operations documentation.

## Safe shutdown

Administrators may use:

```bash
sudo shutdown -h now
```

Closing SSH with `exit` does not shut down the server.
