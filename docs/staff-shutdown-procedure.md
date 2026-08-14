# Staff Safe Shutdown Procedure

## Purpose

The Raspberry Pi must not be unplugged while running. Abrupt power loss can corrupt the microSD card and prevent the server from starting correctly.

A designated staff computer contains a restricted SSH key that can perform only the approved shutdown action. It does not provide a shell or administrator access.

## Identify the device

The Raspberry Pi is the small exposed computer board positioned on the laptop cooling platform with fans underneath it.

## When to use

Use this procedure only when authorized to move, disconnect, relocate, or service the Raspberry Pi.

## Steps

1. Open Windows PowerShell on the designated staff computer.
2. Run:

```powershell
ssh -i "$env:USERPROFILE\.ssh\onionserver_staff_shutdown" staffshutdown@onionserver.local
```

3. The connection should close as the Raspberry Pi begins a safe shutdown.
4. Wait approximately one minute.
5. Disconnect power only after shutdown has completed.
6. Never remove the microSD card while the Pi is powered or shutting down.

## If the command fails

Do not try random commands and do not immediately unplug the server. Photograph or screenshot the error and contact the administrator.

## Starting again

Reconnect the normal power supply. The operating system, networking, Nginx, and Tor should start automatically. Allow several minutes for the Onion Service to return.
