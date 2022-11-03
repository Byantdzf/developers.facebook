//容器
document.write('<div class="container">');
//需要的数据
var list = [
  {
    src: "https://vod-mp.ufutx.com/sv/46ac67ca-18364378b51/46ac67ca-18364378b51.mp4",
    title: "儿童美育，怎么避免孩子成为俗气的人？"
  },
  {
    src: "https://vod-mp.ufutx.com/sv/b73b73a-18364386c83/b73b73a-18364386c83.mp4",
    title: "(加群明晚看直播)零基础Ai商业插画全能班"
  }
]
let width = window.screen.width
var x = document.createElement("VIDEO");
x.setAttribute("width", width+"px");
x.setAttribute("height", "");
x.setAttribute("controls", "controls");
x.setAttribute("autoplay", "true");
x.setAttribute("loop", "true");
x.setAttribute("src", "https://vod-mp.ufutx.com/sv/46ac67ca-18364378b51/46ac67ca-18364378b51.mp4");
document.body.appendChild(x);
