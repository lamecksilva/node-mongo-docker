## Node, Mongo & Docker

I created this repository to serve as a boilerplate / guide for when I develop new applications with nodejs, mongoDB and docker, I hope it helps you :grin:

---

### Important Notes and Tips:

**Dockerfile**

It is important to mention that for the nodemon to work well with docker, docker-compose and etc, it is not enough to just mention it in the package.json, you need to install it (`npm i -g nodemon`) via dockerfile as well.

**docker-compose.yml**

In order to resolve a docker bug with node_modules, you must add the "volumes" with the folders `node_modules`, e.g:

```
volumes:
  - ./node_modules:/node-app/node_modules
```

**mongoose.connect()**

For the connection of the mongoose with the mongo of the docker to happen well, it is necessary to put the name of the service (in this case the name is `db`), in the uri of the connection, e.g:

```js
mongoose.connect('mongodb://db:27017/name-of-database');
```
