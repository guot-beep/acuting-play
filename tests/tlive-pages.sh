#!/usr/bin/env bash
# Fetch every live page and check that every versioned asset it asks for exists.
# Chromium in the build sandbox cannot reach the host, so this is the smoke test:
# a page that references hud.js?v=50 while the host still serves v=49 is exactly
# how a "fixed" bug reappears on someone's phone.
H="${HOST:-https://play.acuting.com}"
PAGES="index.html progress.html practice.html sort.html pointroom.html herbroom.html
       chapter.html dailycase.html prologue.html wuqinxi.html yinyang.html acuting-play.html"
fail=0; checked=0
for pg in $PAGES; do
  body=$(curl -s -H 'Cache-Control: no-cache' "$H/$pg")
  if [ -z "$body" ]; then echo "  ✗ $pg did not load"; fail=$((fail+1)); continue; fi
  # Real attributes only. chapter.html and practice.html build their data src
  # inside a document.write, and a loose pattern happily matched the JS string
  # fragments ("data/chapters/' + id + '.js") and reported them all as 404s.
  refs=$(printf '%s' "$body" | grep -o '\(src\|href\)="[A-Za-z0-9_./-]*\.\(js\|css\)\(?v=[0-9]*\)\?"' \
         | sed 's/.*="//;s/"$//' | grep -v '^http' | sort -u)
  bad=""
  for r in $refs; do
    c=$(curl -s -o /dev/null -w '%{http_code}' "$H/$r"); checked=$((checked+1))
    [ "$c" = "200" ] || bad="$bad $c:$r"
  done
  if [ -n "$bad" ]; then echo "  ✗ $pg →$bad"; fail=$((fail+1)); else echo "  ✅ $pg"; fi
done
# the two dynamic loaders build their url at runtime, so check one of each by hand
for r in data/chapters/01.js data/practice/wuxing.js data/chapters.js data/practice.js; do
  c=$(curl -s -o /dev/null -w '%{http_code}' "$H/$r"); checked=$((checked+1))
  [ "$c" = "200" ] || { echo "  ✗ dynamic loader target missing: $c $r"; fail=$((fail+1)); }
done
echo
echo "checked $checked asset references across $(echo $PAGES | wc -w) live pages · $fail pages with a problem"
exit $([ $fail -eq 0 ] && echo 0 || echo 1)
