This is a simple notifications feature proof of concept

In order to run this, you need to have docker previously installed 
https://docs.docker.com/get-docker/

After having and running docker, you should clone this repo
https://github.com/gsus-gutierrez/notificationsApp

When you have both of these things, you should be set up

First, in the root directory, run 
docker-compose build
In order to build the images

After which you should run 
docker-compose up

The necessary images should be pulled and built, and you should have a DB, nodeJS server and vueJS webapp running at the same time, with some seeded data for users.