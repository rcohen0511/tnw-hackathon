#!/usr/bin/env bash

# cd beer-dashboard && npm run build && cd ..

#cp -rf beer-dashboard/build/static eugenech/examples-static/
cp beer-dashboard/build/index.html eugenech/examples-static/templates
# change source add './"
cd eugenech/examples-static
lib up dev