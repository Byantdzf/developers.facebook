const _0x384d = ['writeln', 'ads', '/admin/ads/', 'indexOf', 'data', 'script', 'GET', 'parse', 'createElement', 'width', 'DELETE', 'iPhone', 'device', '100vw', 'system', 'length', 'log', 'iPad', 'POST', 'style', 'url', 'img', 'includes', 'PUT', 'match', 'open', 'src', 'status', 'split'];
const _0x238c = function (_0x384d05, _0x238c48) {
    _0x384d05 = _0x384d05 - 0x0;
    let _0x4c16ec = _0x384d[_0x384d05];
    return _0x4c16ec;
};
var id = '', SERVER = 'https://ad.ufutx.com/api';
document[_0x238c('0x0')]('<div\x20id=\x22container\x22>');

function getSplitUrl() {
    var _0x18642b = document['getElementsByTagName'](_0x238c('0x5'));
    for (let _0x6e326f of _0x18642b) {
        if (_0x6e326f['src'][_0x238c('0x16')](_0x238c('0x1'))) {
            var _0x31f782 = _0x6e326f[_0x238c('0x1a')][_0x238c('0x1c')]('?')[0x1];
            if (_0x31f782) {
                id = _0x31f782['split']('=')[0x1];
                setTimeout(() => {
                    startRequest('get', SERVER + '/admin/js/ads/' + id);
                });
                return _0x31f782;
            }
        }
    }
}

getSplitUrl();
var xmlhttp;

function createXMLHttpRequest() {
    xmlhttp = new XMLHttpRequest();
}

function startRequest(_0x2fb59d, _0x427a6d) {
    _0x2fb59d = [_0x238c('0x6'), _0x238c('0x12'), _0x238c('0x17'), _0x238c('0xa')][_0x238c('0x3')](_0x2fb59d) > -0x1 ? _0x2fb59d : 'GET';
    createXMLHttpRequest();
    xmlhttp[_0x238c('0x19')](_0x2fb59d, _0x427a6d, !![]);
    xmlhttp['onreadystatechange'] = handleStateChange;
    xmlhttp['send'](null);
}

function handleStateChange() {
    if (xmlhttp['readyState'] == 0x4 && xmlhttp[_0x238c('0x1b')] == 0xc8) {
        var _0x13998d = xmlhttp['responseText'];
        if (_0x13998d != null && _0x13998d != '') {
            console['log'](JSON[_0x238c('0x7')](_0x13998d));
            if (JSON[_0x238c('0x7')](_0x13998d)['data']['pic']) {
                let _0x43ebed = JSON['parse'](_0x13998d)[_0x238c('0x4')]['pic'][_0x238c('0x14')];
                let _0x25a8be = document['getElementById']('container');
                let _0x38960a = document[_0x238c('0x8')](_0x238c('0x15'));
                _0x38960a[_0x238c('0x1a')] = _0x43ebed;
                _0x38960a[_0x238c('0x13')][_0x238c('0x9')] = _0x238c('0xd');
                _0x25a8be['appendChild'](_0x38960a);
            }
        }
    }
}

let webLog = {};
let userAgent = navigator['userAgent'];
let m1 = userAgent[_0x238c('0x18')](/MicroMessenger.*?(?= )/);
if (m1 && m1[_0x238c('0xf')] > 0x0) {
    webLog['wechat'] = m1[0x0];
}
if (userAgent['includes']('iPhone') || userAgent[_0x238c('0x16')](_0x238c('0x11'))) {
    if (userAgent['includes']('iPad')) {
        webLog['device'] = _0x238c('0x11');
    } else {
        webLog[_0x238c('0xc')] = _0x238c('0xb');
    }
    m1 = userAgent['match'](/iPhone OS .*?(?= )/);
    if (m1 && m1[_0x238c('0xf')] > 0x0) {
        webLog[_0x238c('0xe')] = m1[0x0];
        console[_0x238c('0x10')](m1, '-----------');
        startRequest(_0x238c('0x12'), SERVER + '/admin/ads/' + id + '/member?type=h5&fee_mode=view&device_info=' + webLog[_0x238c('0xe')]);
        console[_0x238c('0x10')](webLog[_0x238c('0xe')]);
    }
}
if (userAgent[_0x238c('0x16')]('Android')) {
    m1 = userAgent[_0x238c('0x18')](/Android.*; ?(.*(?= Build))/);
    if (m1 && m1['length'] > 0x1) {
        webLog[_0x238c('0xc')] = m1[0x1];
        console['log'](webLog[_0x238c('0xc')]);
        startRequest('POST', SERVER + _0x238c('0x2') + id + '/member?type=h5&fee_mode=view&device_info=' + webLog['device']);
    }
    m1 = userAgent[_0x238c('0x18')](/Android.*?(?=;)/);
    if (m1 && m1[_0x238c('0xf')] > 0x0) {
        webLog[_0x238c('0xe')] = m1[0x0];
    }
}
