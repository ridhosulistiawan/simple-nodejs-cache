#!/bin/sh

# run redis server
redis-server &

# run nodejs app
node main.js 
