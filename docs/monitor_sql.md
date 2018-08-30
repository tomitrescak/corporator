# Instructions for MY SQL

Run docker

```
$ docker exec -it prisma_mysql_1 bash
or
$docker attach prisma_mysql_1
```

Enable logging. **Make sure to disable**!!!

```
SET global general_log_file='/var/log/mysql/general.log';
SET global general_log = on;
SET global log_output = 'file';
```

Tail

```
tail -f /var/log/mysql/general.log
```

Disable logging

```
SET global general_log = off;
```
