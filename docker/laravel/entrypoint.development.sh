#!/bin/bash
set -e

# Create .env from example if it doesn't exist
if [ ! -f "/var/www/html/.env" ]; then
    cp /var/www/html/.env.example /var/www/html/.env
fi

# Generate an application key only for a new environment. Changing it on every
# restart invalidates signed verification links and encrypted session cookies.
if ! grep -q '^APP_KEY=.\+' /var/www/html/.env; then
    php artisan key:generate --no-interaction
fi

php artisan migrate --force

# Notifications implement ShouldQueue, so keep a worker running in development.
php artisan queue:work --tries=3 --timeout=60 &

exec php artisan serve --host=0.0.0.0 --port=8000