#!/bin/sh 

VARIANT=$1 
ATTR=$2

echo "VARIANT: $VARIANT"
echo "ATTR: $ATTR"

grep "$VARIANT\\\:$ATTR" ./dist/main.css