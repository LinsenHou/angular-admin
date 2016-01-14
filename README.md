## angular-admin
打造纯前端的web后台..

## Installation
 
设置你的nginx,使得静态资源的正确访问：
```nginx
server {
        listen  80;   
        server_name  angular-admin.cn;

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

```sh
git clone https://github.com/zhangliang-phper/angular-admin.git
npm install  # 安装依赖包
grunt  # 运行grunt default task 
```

现在，打开浏览器 angular-admin.cn即可访问；
