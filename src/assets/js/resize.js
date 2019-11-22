var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var oH = document.documentElement.clientHeight;
var nH = null
window.onresize = function () {
  if (isAndroid){
    nH = document.documentElement.clientHeight;
    var btns = document.getElementsByClassName('bottom-btn');
    if (nH < oH) {
      for (var i = 0; i < btns.length; i++) {
        btns[i].style.display = 'none'
      }
    } else {
      for (var i = 0; i < btns.length; i++) {
        btns[i].style.display = 'block'
      }
    }
  }
}
