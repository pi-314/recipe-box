# Recipe Box Example App

A very basic (proof of concept) app, demonstrating the usage of the local store in the offline/online data synchronization between the frontend client and the server-side RESTful API scenario.

> :warning: **Caution**: This project is just a playground for playing around with different modern (at the time of writing) frameworks. Please don't use it as a refference for any production systems!


The things used / tested in this project:

* Spring Boot 3.3
* Flyway
* MySQL 8.4
* Angular 18 ( with signals & Co)
* Jest (for UT)
* Playright (for e2e)
* Spartan NG ( 'SHADCN-like but Angular friendly' UI Component library in early alpha )
* Tailwind CSS
* NPX / NX (unfortunatelly, with very little outcome for the project)

## Getting Started



### Prerequisites

The things you need to have installed.

* JDK 21
* Apache Maven
* Docker CLI
* Node / npm

### Installation

NOTE: for the toolchain setup please consult the official documentation.

### Commands you may need...

... to get the thing up and running


```
# from project root!

# start MySQL in container, for used credential see .env file
$ docker compose up -d

# start backend REST API application
$ mvn spring-boot:run

# then cd into the frontend subdirectory (workspace)
$ cd src/main/frontend

# from there:

# run unit tests
$ npx jest--coverage --silent

# (here you may just ignore all the failing tests of the Spartan UI components)

# run frontend id debug mode
$  nx serve

```

After that the application shoud be available on http://localhost:4200 (frontend) and http://localhost:8080 (backend REST endpoints).


