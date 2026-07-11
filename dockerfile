
FROM node:20-alpine AS frontend-build

WORKDIR /frontend

COPY ./frontend/package*.json ./

RUN npm install

COPY ./frontend .

RUN printenv | grep VITE || true
RUN echo "VITE_RAZORPAY_KEY=$VITE_RAZORPAY_KEY"

RUN npm run build

FROM node:20-alpine

WORKDIR /app

COPY ./backend/package*.json ./

RUN npm install

COPY ./backend .


COPY --from=frontend-build /frontend/dist ./public

EXPOSE 8000

CMD ["node", "server.js"]