# wedding_vv

## Запуск проекта

### Сборка контейнера
```sh
docker-compose up --build wedding_vv
```

### Остановка контейнера
```sh
docker-compose stop wedding_vv
```


## Разработка

### Запуск синронизации бэк контейнера

```sh
mutagen sync create --name backend ./backend docker://backend-wvv/backend
``` 

### Запуск синронизации фронт контейнера
```sh
mutagen sync create --name frontend ./frontend docker://frontend-wvv/frontend
```

### Запуск фронтенда

```sh
cd frontend
```
```sh
npm run dev
```
