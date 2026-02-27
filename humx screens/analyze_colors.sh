#!/bin/bash

for f in *.png; do
  echo "=== $f ==="
  
  # Extract colors from different sections (top, middle, bottom)
  # Top section (navbar)
  convert "$f" -crop 1901x150+0+0 +repage -colors 5 -depth 8 txt:- 2>/dev/null | head -2
  
done
