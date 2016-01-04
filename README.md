# angular-admin
## 打造纯前端的web后台..

### nginx conf
<code>
http {
	include       mime.types;
	sendfile        on;
	keepalive_timeout  65;
	server {
		listen       80;
		server_name  angular-admin.cn;

		location / {
			root   /angular-admin/root;
			index  src/index.html ;
		}
	}
}
</code>
