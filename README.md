# Oceansky.io

NFT Marketplace

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)]

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## Demo

- [Website](https://oceansky.io)

## Run Locally

- Clone the project

  ```bash
  git clone git@gitlab.com:sando-io/oceansky-io/web-oceansky-io.git
  ```

- Go to the project directory

  ```bash
    cd web-oceansky-io
  ```

- Install dependencies

  ```bash
    yarn
  ```

- Create .env.local and change env variables as per the [instructions](#environment-variables).

  ```bash
    cp .env.example .env.local
  ```

- Start the server

  ```bash
    yarn dev
  ```

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env.local` file

- `NEXTAUTH_URL`
  - This is the your application URL. Locally, you can set this to `http://localhost:3000`
- `SECRET`
  - Set this to any randomly generated string
- `EMAIL_SERVER`
  - This is the email server string. It's in the format of `smtp://username:password@smtp.example.com:587`. Replace `username`, `password` and `smtp.example.com` with your own credentials.
- `EMAIL_FROM`
  - Your email address from which you are sending emails.

## Feedback & Support

For feedback and support, please [open an issue](https://gitlab.com/sando-io/oceansky-io/web-oceansky-io/-/issues) in this repo.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Roadmap

**TBD**

## Contributing

**TBD**

## Deploying

### Vercel

**TBD**

### Netlify

**TBD**
