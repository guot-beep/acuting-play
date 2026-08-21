#!/usr/bin/env python3
"""
Cache-buster.

GitHub Pages and Cloudflare both cache aggressively, so a phone can keep
serving yesterday's hud.js long after a fix is deployed — which looks
exactly like "you didn't fix it". Every local script / stylesheet / data
file therefore carries ?v=NNN, and this bumps NNN across every page.

Run this before every deploy:   python3 bump.py
"""
import glob, re, os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
STAMP = os.path.join(HERE, "VERSION")

# assets whose URL must change when their content changes
ASSETS = r'(state\.js|hud\.js|desktop\.css|data/[a-z0-9_-]+\.js)'
PAT = re.compile(r'(?P<attr>src|href)="(?P<file>' + ASSETS + r')(?:\?v=\d+)?"')


def current():
    try:
        return int(open(STAMP).read().strip())
    except Exception:
        return 0


def main():
    v = current() + 1
    if len(sys.argv) > 1:
        v = int(sys.argv[1])
    touched = []
    for f in sorted(glob.glob(os.path.join(HERE, "*.html"))):
        s = open(f).read()
        new = PAT.sub(lambda m: '%s="%s?v=%d"' % (m.group("attr"), m.group("file"), v), s)
        # chapter.html and practice.html build their data src in JS, so the
        # version lives in a variable rather than an attribute
        new = re.sub(r'var v = "\?v=[^"]*";', 'var v = "?v=%d";' % v, new)
        if new != s:
            open(f, "w").write(new)
            touched.append(os.path.basename(f))
    open(STAMP, "w").write(str(v))
    print("v=%d → %s" % (v, ", ".join(touched) if touched else "no change"))


if __name__ == "__main__":
    main()
