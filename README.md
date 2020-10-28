# Synthetic-Api

## Description
Microservice API POST endpoint that writes a value to a memcached container. It works alongside a synthetic testing AWS Lambda.

## Docker

To run in a Docker container
```
docker-compose up dev
```

## Telnet Memcached

To run a dockerized memcached container
```
docker-compose run telnet memcached 11211
```

