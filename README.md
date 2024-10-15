# CalSentinel 
Welcome to **CalSentinel**, a powerful full-stack scheduling application built from scratch using cutting-edge technologies. This project is designed to help users manage their schedules efficiently, integrating calendar functionalities and modern UI/UX components.

![Screenshot 2024-10-11 231419](https://github.com/user-attachments/assets/83c3360e-25cd-49f3-99fd-24949604cec1)


## 🚀 Tech Stack
The following technologies are used to build CalSentinel:
- **Next.js** – React framework for server-side rendering and static site generation.
- **Nylas** – Email, calendar, and scheduling API.
- **Supabase Postgres** – Open-source Postgres database with real-time capabilities.
- **Prisma** – Modern database toolkit to interact with PostgreSQL.
- **Tailwind CSS** – Utility-first CSS framework for fast UI development.
- **Auth.js** – Authentication library for secure user login.
- **Shadcn/UI** – UI components built on top of Radix.
- **Conform** – Form validation and handling made simple.

## 📖 Features
- Full user authentication and authorization flow
- Seamless calendar integration with Nylas API
- Real-time scheduling and event management
- Customizable user interface with Tailwind CSS and Shadcn/UI
- Deployment on Vercel for a scalable and reliable solution

  ## 🛠️ Installation
  To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/GitSentinel/calsentinel.git
   cd calsentinel

2. Install dependencies:
   ```bash
   npm install

3. Set up environment variables:
  - Create a .env.local file in the root directory.
    ```bash
    AUTH_SECRET=""
    AUTH_GITHUB_ID=""
    AUTH_GITHUB_SECRET=""
    AUTH_GOOGLE_ID=""
    AUTH_GOOGLE_SECRET=""
    
    DATABASE_URL=""
    DIRECT_URL=""
    
    NYLAS_API_SECRET_KEY = ""
    NYLAS_API_URI=""
    NYLAS_CLIENT_ID=""
    
    NEXT_PUBLIC_URL="http://localhost:3000"
    UPLOADTHING_TOKEN=""
    
  - Add the necessary environment variables for Nylas, Supabase, and Auth.js.

4. Run the development server:
   ```bash
   npm run dev

The application will be available at http://localhost:3000.

## 🧑‍💻 Contribution
Feel free to open issues or submit pull requests if you'd like to contribute to the project.


