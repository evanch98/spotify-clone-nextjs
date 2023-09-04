# spotify-clone-nextjs

Start Date: 31<sup>st</sup> May 2023<br>
A Spotify clone web application built with TypeScript, React, Next.js, and Tailwind CSS.

# Goals

- To showcase my knowledge of React, TypeScript, NextJs, and Tailwind CSS
- To build a Spotify clone website
- To utilize Clean Architecture
- To leverage the power of Next.js 13 App Router in the web application

# Key Features

- Supabase and Stripe integrations
- Users' data are stored on the Supabase
- Users can logged with email or GitHub which is possible by the Supabase
- Users can upload songs
- Users can like songs and see the list of the liked songs
- Users can search songs from the sever, and the songs will be displayed in realtime
- Users can play and listen to the songs uploaded by them or other users (can actually play the uploaded songs)
- Users can adjust the volume of the sound and mute the sound
- Users can buy the premium subscription which is made possible by the Stripe
- Users can cancel the premium subscription
- Restrict the user from performing some actions if there is no premium subscription

# Testing the Project

To test the project, download the zip file and open it in the editor of your choice.
Then, run `npm install` in the terminal to install the dependencies.

```bash
npm install
```

After installing the required dependencies, you will have to create a `.env` file at the root of your project folder.
The required environment variable is as follows.

```text
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

Follow the steps from the official documentation for [Supabase](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs) and [Stripe](https://stripe.com/docs/development) to get the values for the environment variables.
After completing the above steps, run `npm run dev` to test the project.

```bash
npm run dev
```

If you do not want to go through all the troubles, you can always test the [demo website](https://ecommerce-admin-nextjs-mu.vercel.app/) for this project.
