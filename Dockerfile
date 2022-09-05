FROM node:16.17.0
COPY . ./dir
WORKDIR /dir
RUN npm install vite -g && npm install pnpm -g && npm install
CMD npm run dev