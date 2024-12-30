FROM node:18 AS base
WORKDIR /app
COPY package*.json ./
EXPOSE 3000

FROM base AS builder
WORKDIR /app
COPY . .
RUN npm install --legacy-peer-deps
RUN npm run build

FROM base AS dev
RUN npm install --legacy-peer-deps
COPY . .
CMD ["npm", "start"]

FROM base AS production
WORKDIR /app
COPY --from=builder /app/build ./build
CMD ["npm", "start"]