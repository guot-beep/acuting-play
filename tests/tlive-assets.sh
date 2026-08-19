#!/usr/bin/env bash
# Every image the game references must exist ON THE LIVE HOST. Checking a local
# copy is what hid 26 missing anatomy plates once, and a missing head plate that
# quietly broke chapter six: the files were in the workspace and nowhere else,
# and the collapse-on-error logic made it look intentional.
#
# Run this AFTER every deploy.   HOST=... to point it elsewhere.
H="${HOST:-https://play.acuting.com}"
fail=0; n=0
# only paths inside double quotes — comments in these files mention art/ in prose
srcs=$( for f in data/points.js data/herbs.js data/chapters.js; do curl -s "$H/$f"; done \
        | grep -o '"art/[^"]*"' | tr -d '"' | sort -u )
for s in $srcs; do
  c=$(curl -s -o /dev/null -w '%{http_code}' "$H/$s"); n=$((n+1))
  [ "$c" = "200" ] || { echo "  ✗ $c  $s"; fail=$((fail+1)); }
done
echo "checked $n referenced images on the live host · $fail missing"
exit $([ $fail -eq 0 ] && echo 0 || echo 1)
