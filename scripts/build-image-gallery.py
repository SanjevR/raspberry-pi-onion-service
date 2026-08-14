from pathlib import Path
from PIL import Image
import html
import shutil

SOURCE = Path("source-images")
DEST = Path("image-candidates")
GALLERY = Path("image-gallery.html")

DEST.mkdir(parents=True, exist_ok=True)
for path in DEST.iterdir():
    if path.is_file():
        path.unlink()

items: list[tuple[str, int, int, str]] = []
number = 1

for path in SOURCE.rglob("*"):
    if not path.is_file():
        continue

    try:
        with Image.open(path) as image:
            width, height = image.size
            image_format = (image.format or "").upper()

            if width < 150 or height < 100:
                continue

            extension = {
                "JPEG": ".jpg",
                "PNG": ".png",
                "WEBP": ".webp",
                "GIF": ".gif",
            }.get(image_format)

            if not extension:
                continue

            new_name = f"candidate-{number:03d}{extension}"
            shutil.copy2(path, DEST / new_name)
            items.append((new_name, width, height, str(path)))
            number += 1
    except Exception:
        continue

cards = []
for name, width, height, original in items:
    cards.append(
        f"""<article class="card">
<img src="image-candidates/{html.escape(name)}" alt="Image candidate">
<h2>{html.escape(name)}</h2>
<p>{width} × {height}</p>
<small>{html.escape(original)}</small>
</article>"""
    )

GALLERY.write_text(
    """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Image Candidate Gallery</title>
<style>
body{font-family:Arial,sans-serif;margin:2rem;background:#f4f4f4}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem}
.card{background:#fff;padding:1rem;border-radius:.6rem}
img{display:block;max-width:100%;max-height:350px;margin:auto}
small{overflow-wrap:anywhere}
</style>
</head>
<body>
<h1>Image Candidates</h1>
<div class="grid">"""
    + "\n".join(cards)
    + "</div></body></html>\n",
    encoding="utf-8",
)

print(f"Found {len(items)} candidate images.")
