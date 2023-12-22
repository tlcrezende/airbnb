#!/bin/sh
set -e

if [ -f tmp/pids/server.pid ]; then
  rm tmp/pids/server.pid
fi

echo 'Installing deps' \
  && bundle install \
  && yarn install --check-files \
  &&

echo "Setup database" && rake db:exists && rake db:migrate || rake db:setup

exec "$@"
