FROM node:18 AS base
WORKDIR /app
COPY package*.json ./
EXPOSE 3000

FROM base AS builder
WORKDIR /app
COPY . .
RUN npm install --force
RUN npm run build

FROM base AS dev
RUN npm install --force
COPY . .
CMD ["npm", "start"]

FROM base AS production
WORKDIR /app
COPY --from=builder /app/build ./build
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]