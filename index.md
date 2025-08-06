# Appwrite Setup Guide

This document outlines the steps to configure Appwrite Cloud for the Healthcare Next.js project.

## Prerequisites

- Node.js (>=14) and npm installed
- An Appwrite Cloud account (https://cloud.appwrite.io/)
- A project created in Appwrite Cloud
- API Key with required permissions (Databases, Functions, Storage)

## 1. Create Appwrite Project

1. Log in to Appwrite Cloud.
2. Click **Create Project**, set a name (e.g., `HealthcareProject`), and click **Create**.
3. Copy the **Project ID** from the project settings.

## 2. Configure Environment Variables

In the root of your project, create a `.env.local` file:

````bash
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://<YOUR_APPWRITE_ENDPOINT>
NEXT_PUBLIC_APPWRITE_PROJECT=<YOUR_PROJECT_ID>
# Appwrite Cloud Setup

Follow these steps to configure Appwrite Cloud for your Healthcare Next.js project. All code samples have been removed for clarity.

## Prerequisites
- Node.js v14+ and npm installed
- Appwrite Cloud account and console access
- Appwrite Project created (Project ID and API Key available)

## 1. Create Appwrite Project
- Log in to Appwrite Cloud
- Create a new project (e.g., "HealthcareProject")
- Copy the Project ID from settings

## 2. Configure Environment Variables
- In your project root, create a `.env.local` file with:
  - `NEXT_PUBLIC_APPWRITE_ENDPOINT` set to your endpoint URL
  - `NEXT_PUBLIC_APPWRITE_PROJECT` set to your Project ID
  - `APPWRITE_API_KEY` set to your API Key

## 3. Install and Initialize SDK
- Install the Appwrite SDK via npm
- In your client configuration file, set the endpoint and project using environment variables

## 4. Setup Database Collections
- In Appwrite Console → Databases, create a `patients` database
- Define a `users` collection (fields: name, email, avatar) with owner-only permissions
- Define an `appointments` collection (fields: date, doctor, patientId, notes) with role-based access for users and administrators

## 5. Configure Storage Buckets
- In Appwrite Console → Storage, create buckets for file uploads (e.g., patient-files)

## 6. Configure CORS & OAuth
- Appwrite Console → Settings → Domains & Origins: add development/production domains
- (Optional) Appwrite Console → Auth → OAuth: configure social login providers

## 7. Enable Functions (Optional)
- Appwrite Console → Functions: create and deploy server-side functions as needed

## 8. Deployment & Monitoring
- Push code to your repository and deploy (e.g., Vercel)
- Configure environment variables in your deployment settings
- Monitor usage and logs via Appwrite Console **Usage** and **Logs** tabs

---

You’re all set! Your Next.js project now has a clean Appwrite Cloud setup.
   - Use `owner()` for user-specific access.
   - Add a custom `admin` role for clinic staff.

## 11. Integrate with Next.js

In your Next.js pages or API routes, import Appwrite services and use them as follows:

```ts
// pages/api/login.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { account } from '../../lib/appwrite.config';

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;
  try {
    const session = await account.createEmailSession(email, password);
    res.status(200).json(session);
  } catch (error) {
    res.status(400).json({ error });
  }
}
````

```ts
// lib/appwrite.utils.ts
import { databases } from "./appwrite.config";
export async function getAppointments(userId: string) {
  const result = await databases.listDocuments(
    "YOUR_DATABASE_ID",
    "appointments",
    [Query.equal("patientId", [userId])]
  );
  return result.documents;
}
```

## 12. Deploy & Monitor

1. Push your code to GitHub and configure Vercel to point to your repository.
2. In Vercel dashboard, set the same environment variables as in `.env.local`.
3. Deploy and verify the app.
4. Use Appwrite Console’s **Logs** and **Usage** tabs to monitor API usage and function executions.

---

That's it! Your Next.js Healthcare project is now configured to use Appwrite Cloud.
