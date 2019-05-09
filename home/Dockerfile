#导入nginx镜像
FROM nginx
MAINTAINER Humorliang <humorliang@163.com>
#把当前打包工程的html复制到虚拟地址
ADD ./dist /usr/share/nginx/html
#使用自定义nginx.conf配置端口和监听
COPY nginx.conf /etc/nginx/nginx.conf
RUN /bin/bash -c 'echo web init done!'