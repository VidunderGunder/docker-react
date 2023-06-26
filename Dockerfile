FROM node:20-alpine

ENV PNPM_HOME=/root/.local/share/pnpm
ENV PATH=$PATH:$PNPM_HOME

WORKDIR /vite-react-ts-app
COPY package.json ./

RUN corepack enable && corepack prepare pnpm@latest --activate
# Enable `pnpm add --global` on Alpine Linux by setting
# home location environment variable to a location already in $PATH
# https://github.com/pnpm/pnpm/issues/784#issuecomment-1518582235
ENV PNPM_HOME=/usr/local/bin

RUN pnpm i
COPY . ./
EXPOSE 3000

CMD pnpm dev