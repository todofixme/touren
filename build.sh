#!/usr/bin/env sh
set -e
rm -rf dist
(cd andalusien && npm ci && npm run build)
(cd norwegen   && npm ci && npm run build)
cp _redirects dist/_redirects
cp serve.json  dist/serve.json
cp index.html dist/index.html
