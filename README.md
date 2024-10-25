# blog-backend

### Setting up a pm2 process for a strapi app **(for the first time)**:
1.  Ensure that latest changes are pulled in the root directory:
    ```sh
    git pull
    ```

2.  Add `ecosystem.config.js` in the root directory with the following content:
    ```js
    module.exports = {
        apps: [
            {
                name: "blog-backend", // app name
                script: "npm",
                args: "start",
                wait_ready: true, // wait for connecting to database
                listen_timeout: 3000,
            },
        ],
    };
    ```

3.  Install dependencies:
    ```sh
    npm i
    ```

4.  Run build:
    ```sh
    npm run build
    ```

5.  Start pm2 process:
    ```sh
    pm2 start ecosystem.config.js
    ```
