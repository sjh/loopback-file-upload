# loopback-file-upload
This nodejs loopback application is modified from https://github.com/strongloop/loopback-example-user-management
```
$ cd loopback-example-user-management
$ npm install
$ node .
```

## Requirements

* mysql server tested on 5.6, please change user, password, database, socketPath ...etc if necessary in "mysqlDs" entry.

## Runtime package versions

```
strongloop v6.0.0 (node v0.10.26)
├── strong-arc@1.8.8
├── strong-build@2.1.0
├── strong-deploy@3.1.2
├── strong-mesh-models@8.1.0
├── strong-pm@5.2.0
├── strong-registry@1.1.5
├── strong-start@1.3.2
├─┬ strong-supervisor@3.3.1
│ └── strong-agent@2.0.2
├── generator-loopback@1.20.4
├── node-inspector@0.7.4
└── nodefly-register@0.3.3
```

## Testing

### Login with default user, password

```
curl -H "Content-Type: application/json" -d '{"email": "admin@sample.org", "password": "admin"}' http://localhost:3000/api/users/login
```

### Create folder and upload file

* Create folder01 in storage
```
curl -d "name=folder01" http://localhost:3000/api/Files/
```

* Upload file test.txt to server

```
echo "test" >> test.txt
curl -F "file=@./test.txt" http://localhost:3000/api/Files/folder01/upload
```
