#!/bin/bash

# Effectuez les modifications que vous souhaitez pousser
echo "# this is the example for the app" > README.md

# Effectuez le commit
git add .
git commit -m "fix : this is the test for an auto-push"

# Poussez les changements sur la branche spécifiée
git push origin main
