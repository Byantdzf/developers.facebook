// const script = document.createElement("script");
var id = '', SERVER='https://ad.ufutx.com/api'
// script.src = "https://image.ufutx.com/js/H5/mobile-detect.min.js"; // 这个写法是获取到页面的body标签，向节点的子节点列表的末尾添加script
// document.getElementsByTagName('body')[0].appendChild(script); // 也有一种情况是获取dom结构然后再dom结构里面(开始的地方)加入script并引入js，再调用相应函数
// var list = []
document.writeln('<div id="container">');
function getSplitUrl() {
    var js = document.getElementsByTagName("script");
    for (let item of js) {
        if (item.src.includes('ads')) {
            var arraytemp = item.src.split('?')[1];
            if(arraytemp){
                id = arraytemp.split('=')[1]
                setTimeout(() => {
                    startRequest('get', `${SERVER}/admin/js/ads/${id}`)
                })
                return arraytemp;
            }
        }
    }
    // js加载的是当前引用的js，得到script，并把src用'?'分隔成数组
}

getSplitUrl()

// ajax请求 ----------------------------------------------

var xmlhttp; //创建xmlhttprequest对象
function createXMLHttpRequest() {
    xmlhttp = new XMLHttpRequest(); //这里要判断IE的写法
}

function startRequest(methods,url) {
    debugger
    methods = ['GET', 'POST', 'PUT', 'DELETE'].indexOf(methods) > -1 ? methods : 'GET'
    createXMLHttpRequest();
    xmlhttp.open(methods, url, true); //true:异步，false:同步
    xmlhttp.onreadystatechange = handleStateChange;
    xmlhttp.send(null);
}

function handleStateChange() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var txt = xmlhttp.responseText;
        if (txt != null && txt != "") {
            console.log(JSON.parse(txt));
            if(JSON.parse(txt).data.pic){
                let url = JSON.parse(txt).data.pic.url
                let oTest = document.getElementById("container");
                let img = document.createElement('img');
                img.src =url
                img.style.width = '100vw'
                oTest.appendChild(img);
            }
        }
    }
}


let webLog = {}
let userAgent = navigator.userAgent // 获取微信版本
let m1 = userAgent.match(/MicroMessenger.*?(?= )/)
if (m1 && m1.length > 0) {
    webLog.wechat = m1[0]
} // 苹果手机
if (userAgent.includes('iPhone') || userAgent.includes('iPad')) { // 获取设备名
    if (userAgent.includes('iPad')) {
        webLog.device = 'iPad'
    } else {
        webLog.device = 'iPhone'
    } // 获取操作系统版本
    m1 = userAgent.match(/iPhone OS .*?(?= )/)
    if (m1 && m1.length > 0) {
        webLog.system = m1[0]
        console.log(m1,'-----------')
        startRequest('POST', `${SERVER}/admin/ads/${id}/member?type=h5&fee_mode=view&device_info=${webLog.system}`)
        console.log(webLog.system)
    }
} // 安卓手机
if (userAgent.includes('Android')) { // 获取设备名
    m1 = userAgent.match(/Android.*; ?(.*(?= Build))/)
    if (m1 && m1.length > 1) {
        webLog.device = m1[1]
        console.log(webLog.device)
        startRequest('POST', `${SERVER}/admin/ads/${id}/member?type=h5&fee_mode=view&device_info=${webLog.device}`)
    } // 获取操作系统版本
    m1 = userAgent.match(/Android.*?(?=;)/)
    if (m1 && m1.length > 0) {
        webLog.system = m1[0]
    }
}

