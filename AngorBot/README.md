# Flowise Docker Hub Image

Starts Flowise from [DockerHub Image](https://hub.docker.com/r/flowiseai/flowise)

## Usage

To run AngorBot and use the documentation as a model for AI, you need to start Flowise using Docker. Follow these steps to set up and run Flowise:

1. Create a `.env` file and specify the `PORT` (refer to `.env.example` for guidance).
2. Run the following command to start the Docker containers:
    ```sh
    docker compose up -d
    ```
3. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to access Flowise.
4. To stop the containers, use the command:
    ```sh
    docker compose stop
    ```

## 🔒 Authentication

To enable authentication for Flowise, follow these steps:

1. Create a `.env` file and specify the `PORT`, `FLOWISE_USERNAME`, and `FLOWISE_PASSWORD` (refer to `.env.example` for guidance).
2. Pass `FLOWISE_USERNAME` and `FLOWISE_PASSWORD` to the `docker-compose.yml` file:
    ```yaml
    environment:
        - PORT=${PORT}
        - FLOWISE_USERNAME=${FLOWISE_USERNAME}
        - FLOWISE_PASSWORD=${FLOWISE_PASSWORD}
    ```
3. Run the following command to start the Docker containers:
    ```sh
    docker compose up -d
    ```
4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to access Flowise.
5. To stop the containers, use the command:
    ```sh
    docker compose stop
    ```

## 🌱 Env Variables

If you want to persist your data (flows, logs, API keys, credentials), set these variables in the `.env` file inside the `docker` folder:

-   DATABASE_PATH=/root/.flowise
-   APIKEY_PATH=/root/.flowise
-   LOG_PATH=/root/.flowise/logs
-   SECRETKEY_PATH=/root/.flowise
-   BLOB_STORAGE_PATH=/root/.flowise/storage

Flowise also supports different environment variables to configure your instance. Read [more](https://docs.flowiseai.com/environment-variables) for detailed information.

By following these instructions, you can effectively run AngorBot using Docker and utilize the documentation as a model for AI. This setup ensures that you have a robust environment for building and managing your chat flows.
