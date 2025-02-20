sass --watch src/scss/main.scss:src/css/styles.css

docker run -it --rm -p 3000:3000 -d -v $pwd/src:/var/www/html/ my-php-app-01

Browser-Sync:
browser-sync start --proxy "localhost:8080" --files "**/*.css,**/*.php"