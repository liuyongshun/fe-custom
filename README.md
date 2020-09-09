# cop-marketing-flow-editor

一、 Charles 上安装 SSL 证书

通过 Help->SSL Proxying->Install Charles Root Certificate 打开证书安装


二、手机配置 Charles 代理

- 需要手机和运行 Charles 的电脑在同一个局域网内

- 启动 Charles，点击 Proxy-Proxy Settings，查看并设置端口

- 查看电脑ip地址和上一步设置的端口号，配置到手机的wifi，手动代理

- （注意打开地址一定是开着charles才会提示下载）手动安装证书，点击 http://chls.pro/ssl 下载证书，并安装, 如果手机不能正常安装，可以电脑打开，下载 charles-proxy-ssl-proxying-certificate.pem

- 将文件复制到手机，更改拓展名为.crt，点击安装

- ios 

- 通过 Help->SSL Proxying->Install Charles Root Certificate On a mobile device 

三、配置 Charles 代理之后手机无法上网的问题

- 关闭防火墙

- 检查tool 选项下的 block list 和 allow list（黑白名单）

二、 手机安装 SSL 证书 

Charles 建议的安装方法。
通过 Help->SSL Proxying->Install Charles Root Certificate On a mobile device ，可以看到以下提示：

配置代理

### window 下 ios配置

- 通过 Help->SSL Proxying->Install Charles Root Certificate 打开证书安装

- 需要手机和运行 Charles 的电脑在同一个局域网内

- 启动 Charles，点击 Proxy-Proxy Settings，查看并设置端口

- 查看电脑ip地址和上一步设置的端口号，配置到手机的wifi，手动代理

- （注意打开地址一定是开着charles才会提示下载）手动安装证书，点击 http://chls.pro/ssl 下载证书。下载好以后，需要先去ios的设置里，安装该证书。

- 证书安装成功后，去iso的 设置 -> 通用 -> 关于本机 -> 证书信任设置 -> 信任证书。

