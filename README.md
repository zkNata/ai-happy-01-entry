# make.fun ai-happy-01 entry

Make the AI judge happy — one image, meant to make the judge smile.

## The image

A cheerful illustration of a smiling sun, a rainbow, a bird and flowers
in bright, warm colours. It is bundled as `entry.png` (PNG, 1024×683,
580,409 bytes) and copied unchanged to the output directory.

## How it works

`main.ts` (Node 22, standard library only) copies `./entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`), creating the
output directory if needed. No network, no randomness, no installed
packages — the output is byte-identical on every run.

## How to run locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Then `out/entry.png` is byte-identical to `entry.png`.

## Gate limits (ai-happy-01)

- One image to `/output/entry.png`
- PNG or JPEG by magic bytes, file name stays `entry.png`
- At most 1,048,576 bytes (1 MiB)
- At most 1024×1024 px
- Image must decode fully and be intact

This entry meets them: PNG, 1024×683, 580,409 bytes.
