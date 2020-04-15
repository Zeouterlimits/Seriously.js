#!/bin/bash -e


directories=(sources effects transforms targets)

for d in ${directories[@]}; do
  for f in `ls $d`; do
    echo "${d}/${f}";
    namechunks=(${f//./ })
    name=${namechunks[1]}
    echo "${d}/${name}.js";
  done
done

# rm -fdr effects/ascii.js
# cp effects/seriously.ascii.js effects/ascii.js

# # Remove the initial UMD stuff
# perl -i -p0e 's/\(function \(root, factory\) \{.*?\}\(window, function \(Seriously\) \{/import Seriously from "..\/build\/seriously\.module";/s' effects/ascii.js
# # Remove the end of the UMD function
# sed -i '$ d' effects/ascii.js
# # Un-indent everything
# sed -i 's/\t\(.*\)/\1/' effects/ascii.js
