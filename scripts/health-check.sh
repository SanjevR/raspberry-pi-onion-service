#!/bin/sh
set -eu

printf 'Temperature: '
if command -v vcgencmd >/dev/null 2>&1; then
    vcgencmd measure_temp
else
    echo 'vcgencmd not installed'
fi

for service in nginx tor@default nftables ssh; do
    printf '%-14s ' "$service"
    systemctl is-active "$service" || true
done

printf '\nUptime:\n'
uptime

printf '\nListening sockets:\n'
ss -tulpn
