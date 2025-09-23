#!/bin/bash
if [ $# -eq 0 ]
then
    echo "No arguments supplied"
else
    for arg in "$@"
    do
        if [ ! -d "ex$arg" ]; then
            mkdir "ex$arg"
            echo "Directory ex$arg created"
        else
            echo "Directory ex$arg already exists"
        fi
    done
fi
