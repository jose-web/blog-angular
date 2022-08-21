from node:16.14.0-alpine3.15 as node
workdir /usr/src/app
copy package*.json ./
run npm install
copy . .
run npm run build

from nginx:1.21-alpine
copy --from=node /usr/src/app/dist/blog-angular /usr/share/nginx/html
copy ./nginx.conf /etc/nginx/conf.d/default.conf
cmd sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'