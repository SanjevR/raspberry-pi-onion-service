#!/bin/sh
set -eu

ROOT=${1:-.}
status=0

check() {
  label=$1
  pattern=$2
  if grep -RInE --exclude-dir=.git --exclude=verify-public-repo.sh --exclude=verify-public-repo.ps1 --binary-files=without-match "$pattern" "$ROOT"; then
    printf '\nWARNING: %s\n' "$label" >&2
    status=1
  fi
}

check 'OpenSSH private key marker found' 'BEGIN OPENSSH PRIVATE KEY'
check 'PEM private key marker found' 'BEGIN (RSA |EC |DSA |)?PRIVATE KEY'
check 'Raw v3 onion address found' '(^|[^a-z2-7])[a-z2-7]{56}\.onion([^a-z2-7]|$)'
check 'Possible real SSH public key found' 'ssh-ed25519[[:space:]]+[A-Za-z0-9+/]{60,}={0,3}'

if [ "$status" -ne 0 ]; then
  printf '\nReview all findings before publishing.\n' >&2
  exit "$status"
fi

printf 'No high-risk secret patterns found. Manual review is still required.\n'
