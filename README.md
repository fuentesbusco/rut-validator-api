# 🇨🇱 RUT Validator API

A lightweight and serverless API built with NestJS to validate Chilean national identification numbers (RUT). Designed to run on Vercel using the `@vercel/node` runtime.

---

## 🔍 Features

- Validates RUT format and verification digit (DV)
- Stateless and fast
- Compatible with Vercel serverless functions
- Ready to integrate into signup flows, KYC processes, and Chile-specific platforms

---

## 📦 Endpoint

**GET** `/validate?rut=12.345.678-5`

**Response:**

```json
{
  "rut": "12.345.678-5",
  "isValid": true
}
```

## 🚀 Deployment

This project is configured to be deployed on Vercel.

1. Clone the repository

```
git clone https://github.com/VJSoftwareLab/rut-validator-api.git
cd rut-validator-api
```

2. Install dependencies

```
npm install
```

3. Run locally (optional)

```
npm run start:dev
```

4. Deploy to Vercel
   Just connect this repo to your Vercel account and deploy. It uses api/index.ts as the serverless entry point.

## ⚙️ Technologies

- NestJS
- Express
- TypeScript
- Vercel Serverless Functions
