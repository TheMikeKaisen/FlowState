# Flowstate - Advanced Task Manager

Flowstate is an advanced task manager application designed to enhance productivity with features like organization management, board customization, team collaboration, and more. It offers a seamless user experience with its drag-and-drop functionality and customizable themes.

## Features

- **Organizations and Boards**: Create and manage organizations with up to 5 boards each. Unlimited to-do cards per board with drag-and-drop support.
- **Custom Themes**: Integrate Unsplash API for selecting different themes.
- **SaaS Model**: Access additional features by upgrading through the Stripe payment gateway.
- **Team Collaboration**: Admins can invite members, assign roles, and manage permissions. Changes are tracked and visible to admins.
- **Authentication**: Seamless authentication with Clerk.

## Tech Stack

- **Front-End**: React, TailwindCSS, Shadcn library
- **Back-End**: Next.js (server actions), TypeScript
- **Database**: PostgreSQL, Prisma
- **APIs and Integrations**: Unsplash API, Stripe, Clerk

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL
- Stripe account for payment integration
- Unsplash API key
- Clerk account for authentication

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/flowstate.git
    cd flowstate
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add the following:
    ```env
    DATABASE_URL=your_postgresql_database_url
    NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_stripe_public_key
    STRIPE_SECRET_KEY=your_stripe_secret_key
    UNSPLASH_ACCESS_KEY=your_unsplash_access_key
    CLERK_FRONTEND_API=your_clerk_frontend_api
    CLERK_API_KEY=your_clerk_api_key
    ```

4. Run database migrations:
    ```bash
    npx prisma migrate dev
    ```

5. Start the development server:
    ```bash
    npm run dev
    ```

6. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

- **Create Organizations**: Start by creating an organization. Each organization can have up to 5 boards.
- **Manage Boards**: Add, edit, and delete boards within each organization. Drag and drop to-do cards as needed.
- **Customize Themes**: Choose from various themes using the integrated Unsplash API.
- **Upgrade for More Features**: Use Stripe integration to upgrade and access unlimited boards.
- **Collaborate with Team Members**: Admins can invite members, assign roles, and track changes.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add new feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Open a Pull Request

.

## Contact

For any questions or feedback, please contact [h.karthiknair@gmail.com](https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRmTNxMwNDbrbxFQScQfbzlzrLsGddhgTzgfWlLDMtgmpPPdkGSHjGLsxGFJghFKldkpqWv).

---

Thank you for using Flowstate! We hope it enhances your productivity and team collaboration.
