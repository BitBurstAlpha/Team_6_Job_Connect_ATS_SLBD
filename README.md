# Job Portal Project

Welcome to the Job Portal Project!

## Installation

## 💻 Running Locally 💻

Follow these Step!

1. Install [PNPM](https://pnpm.io/installation), [MySql](https://www.mysql.com/downloads/), [Nodejs](https://nodejs.org/en/download) or [Volta](https://docs.volta.sh/guide/getting-started)
2. Create database called `job_portal`
3. Clone the project repository.
4. Navigate to the project directory.
5. create `.env.` file in the server root folder and copy paste the content of `.env.sample`, and update necessary credentials.
6. Install the packages.

    ```bash
        pnpm install
    ```

7. Run database migrations

    ```bash
       pnpm --filter server db:migrate
    ```

8. start the development server

    ```bash
        pnpm dev
    ```

9. start the drizzle studio

    ```bash
        pnpm db:studio
    ```
