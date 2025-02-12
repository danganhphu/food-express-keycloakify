# Quick start

```bash
git clone https://github.com/danganhphu/food-express-keycloakify.git
cd food-express-keycloakify
bun install # Or use an other package manager, just be sure to delete the yarn.lock if you use another package manager.
```

# Testing the theme locally

You can start Storybook locally with:

# How to customize the theme
```bash
bun run storybook
```
[Documentation](https://docs.keycloakify.dev/customization-strategies)

# Building the theme

You need to have [Maven](https://maven.apache.org/) installed to build the theme (Maven >= 3.1.1, Java >= 7).  
The `mvn` command must be in the $PATH.

-   On macOS: `brew install maven`
-   On Debian/Ubuntu: `sudo apt-get install maven`
-   On Windows: `choco install openjdk` and `choco install maven` (Or `scoop install maven` `scoop bucket add java` and `scoop install openjdk`))

```bash
bun run build-keycloak-theme
```

Note that by default Keycloakify generates multiple .jar files for different versions of Keycloak.  
You can customize this behavior, see documentation [here](https://docs.keycloakify.dev/targeting-specific-keycloak-versions).

# Testing the Component with keycloakify

```bash
npx keycloakify start-keycloak
```
# Testing the Component with Docker compose

```bash
docker compose -f .\deployments\compose\docker-compose.local.yml up -d
```
