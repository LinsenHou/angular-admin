# angular-admin
## 打造纯前端的web后台..

- 本项目以nginx为例,nginx.conf 如下：
```nginx
server {
        listen  80;   
        server_name  angular.cn;

        root  /home/workspace/angular-admin/src;
        index index.html;

        location ^~ /app {
                root /home/workspace/angular-admin/src/;
        }
        location ^~ /node_modules {
                root /home/workspace/angular-admin/;
        }
        location ^~ /dist {
                root /home/workspace/angular-admin/;
                expires off;
        }
}
```

- 项目启动
```sh
npm install  # 安装依赖包
grunt  # 运行grunt default task 
```
