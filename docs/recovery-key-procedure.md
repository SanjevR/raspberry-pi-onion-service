# SSH Recovery-Key Procedure

## Model

- Everyday primary private key: administrator laptop only
- Emergency recovery private key: offline USB vault only
- Raspberry Pi: corresponding public keys only

## USB filesystem

Use NTFS on a Windows recovery USB so Windows OpenSSH can enforce private-key ACLs. FAT32 does not provide the required ACL model and may cause OpenSSH to reject the key as "too open."

## Verification process

1. Keep the known-good recovery key on the administrator laptop temporarily.
2. Copy it to the NTFS USB.
3. Apply restrictive ACLs.
4. Compare SHA-256 hashes.
5. Log in directly from the USB.
6. Only after successful USB authentication, remove the duplicate recovery private key from the laptop.

## Never store on the USB

Do not store the everyday primary key on the recovery USB. The USB may contain separate recovery folders for other projects, each with independent recovery key pairs.

## Never publish

- private key contents
- passphrases
- screenshots containing private keys
- production public-key lines unless necessary
