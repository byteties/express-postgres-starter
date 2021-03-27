Create Table

https://wkrzywiec.medium.com/database-in-a-docker-container-how-to-start-and-whats-it-about-5e3ceea77e50

$ docker exec -it postgres-docker sh

root@377ef2b9b13e:/# psql -U postgres

postgres=# CREATE TABLE public.users (id SERIAL PRIMARY KEY, last_name varchar(255), first_name varchar(255));