# Starter Template
This is Fetchly's Rails 7 starter template. It has users, [Devise](https://github.com/heartcombo/devise) gem for authentication, [Tailwind](https://tailwindcss.com/) for styling and [Hotwire](https://hotwired.dev/) for frontend handling. 

## Environment Variables

### We use the Rails.application.credentials paradigm for storing and sharing environment variables.

you will need to create a config/credentials/development.key file. ask your trusted developer friend for it. 

To access the credentials in your rails application you can use the `Rails.application.credentials.my_great_credential` or if the credentials are nested `Rails.application.credentials.aws[:access_key_id]`

Editing credentials: `EDITOR="code --wait" bin/rails credentials:edit --environment development` (save and close file)

## Developing inside a Dev Container
The Visual Studio Code Dev Containers extension lets you use a Docker container as a full-featured development environment. This means that you can seamlessly switch your entire development environment just by connecting to a different container.

### Requirements
Local / Remote Host:
    Windows: Docker Desktop 2.0+ on Windows 10 Pro/Enterprise. Windows 10 Home (2004+) requires Docker Desktop 2.3+ and the WSL 2 back-end. (Docker Toolbox is not supported. Windows container images are not supported.)
    macOS: Docker Desktop 2.0+.
    Linux: Docker CE/EE 18.06+ and Docker Compose 1.21+. (The Ubuntu snap package is not supported.)
    Remote hosts: 1 GB RAM is required, but at least 2 GB RAM and a 2-core CPU is recommended.

### Installation

To get started, follow these steps:

Install and configure Docker for your operating system.

#### A: Windows / macOS:

1. Install [Docker Desktop for Windows/Mac](https://www.docker.com/products/docker-desktop/).

2. If you are using WSL 2 on Windows, to ensure the WSL 2 back-end is enabled: Right-click on the Docker taskbar item and select Settings. Check Use the WSL 2 based engine and verify your distribution is enabled under Resources > WSL Integration.

3. When not using the WSL 2 back-end, right-click on the Docker task bar item, select Settings and update Resources > File Sharing with any locations your source code is kept. See tips and tricks for troubleshooting.

#### B: Linux:

1. Follow the [official install instructions for Docker CE/EE for your distribution.](https://docs.docker.com/get-docker/#supported-platforms) If you are using Docker Compose, follow the Docker Compose directions as well.

2. Add your user to the docker group by using a terminal to run: sudo usermod -aG docker $USER

3. Sign out and back in again so your changes take effect.


#### Installing:

1. Install Visual Studio Code or Visual Studio Code Insiders.

2. Install the Dev Containers extension. If you plan to work with other remote extensions in VS Code, you may choose to install the Remote Development extension pack.

### How do I run it? - Alternative 1: devcontainers
1. Open vscode
2. Install [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
- Launch VS Code Quick Open (Ctrl+P), paste the following command, and press enter.
```
https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers
```
3. You'll see an option to restart vscode to run the container. Click it.
4. Wait for the Docker containers to build up and you're good to go! In the entrypoint, the `bin/dev` script will be ran, serving the website on `port 3000` and watching the frontend for changes.

### How do I run it? - Alternative 2: docker-compose
1. Before building the project, if you're running on MacOS, set the default platform to linux:
```sh
 export DOCKER_DEFAULT_PLATFORM=linux/amd64
```

2. Given that `Docker Compose` is installed, simply run:
```
docker compose up
```
3. Access a shel inside the container by running
```
docker compose run web bash
```
... from which you can run rails `db:migrate`, etc

### How do I run it? - Alternative 3: ASDF
1. Install [ASDF](https://asdf-vm.com/guide/getting-started.html)
2. Add plugins: `asdf plugin add ruby && asdf plugin add nodejs && asdf plugin add postgres`
3. Install plugins: `asdf install`
4. Configure PG to use the correct postgres version:
`bundle config build.pg --with-pg-config=$(asdf which pg_config 14.5)`

### Emails on Development
This app has letter_opener_web configured for sent emails, you can access `localhost:3000/leter_opener` to verify those.

### Gotchas
- A terminal shell opened inside the container won't have access to your executables and files outside of it. It is a self containing environment.
- The Procfile.dev, which is called from bin/dev is not interactibe. Therefore, to debug it, you'll need to run the project through `rails s`, which doesn't watch the frontend.


### Found an issue or want to contribute?
Create an issue or open a Pull Request at: https://github.com/fetchly/starter-template and tag fc-anjos or Plucks77.
