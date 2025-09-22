#!/bin/bash

# Check if any arguments were provided
if [ $# -eq 0 ]; then
  echo "No arguments"
else
  # Check if more than 3 arguments were provided
  if [ $# -gt 3 ]; then
    echo "Only the first three arguments will be displayed"
  fi

  # Loop through the first three arguments specifically
  for i in 1 2 3; do
    # Check if the argument exists before trying to display it
    if [ ! -z "${!i}" ]; then
      echo "${!i}"
    fi
  done
fi
