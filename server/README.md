## Backend

This is the backend of food-delivery app.

## Requirements

- Spring boot 3.2.2
- Java 17
- Inmemory DB
- Maven 3.8.6 (only to run maven commands)

## Dependencies

All dependencies are available in pom.xml.

## Configuration

Configure the relevant configurations in application.yml in src/main/resources before building the application

## Build

```
mvn clean install
```

## Run

```
mvn spring-boot:run
```

or

```
java -jar target/server-0.0.1-SNAPSHOT.jar
```

## Test

```
mvn test
```

### Reference Documentation

For further reference, please consider the following sections:

- [Official Apache Maven documentation](https://maven.apache.org/guides/index.html)
- [Spring Boot Maven Plugin Reference Guide](https://docs.spring.io/spring-boot/docs/2.2.1.RELEASE/maven-plugin/)
