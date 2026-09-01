#!/bin/bash
set -e

# composer install
php artisan migrate
#wait $!

# Create .env from example if it doesn't exist
if [ ! -f "/var/www/html/.env" ]; then
    cp /var/www/html/.env.example /var/www/html/.env
fi

# Run key generate safely
php artisan key:generate --no-interaction

# Continue with standard container startup
exec "$@"
php artisan serve --host=0.0.0.0 --port=8000
