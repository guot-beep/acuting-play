#!/usr/bin/env bash
# Every test in this folder, in one go. Run before any deploy.
#   bash tests/run.sh
# Override the browser or the playwright module if the paths differ:
#   PW=/path/to/playwright CHROME=/path/to/chrome bash tests/run.sh
cd "$(dirname "$0")/.."
export PW="${PW:-/home/claude/.npm-global/lib/node_modules/playwright}"
export CHROME="${CHROME:-/opt/pw-browsers/chromium-1194/chrome-linux/chrome}"
fail=0
for f in tests/t*.js; do
  name=$(basename "$f" .js)
  out=$(node "$f" 2>&1)
  if [ $? -eq 0 ]; then printf '  \033[32mPASS\033[0m  %-12s %s\n' "$name" "$(echo "$out" | tail -1 | sed 's/^ *✅ *//')"
  else printf '  \033[31mFAIL\033[0m  %-12s\n' "$name"; echo "$out" | sed 's/^/          /'; fail=1; fi
done
if [ $fail -eq 0 ]; then echo; echo "  all green — safe to deploy"; else echo; echo "  DO NOT DEPLOY"; fi
exit $fail
