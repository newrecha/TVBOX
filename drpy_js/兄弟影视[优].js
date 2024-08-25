muban.mxpro.二级.tabs = '.module-tab-items-box&&.module-tab-item';
muban.mxpro.二级.tab_text = 'div--small&&Text';
var rule = {
    模板: 'mxpro',
    title: '兄弟影视[优]',
    host: 'http://app.brovod.top',
    // url:'/show/fyclass--------fypage---/',
    url: '/show/fyclassfyfilter/',
    filterable: 1,//是否启用分类筛选,
    filter_url: '-{{fl.area}}-{{fl.by or "time"}}-{{fl.class}}-{{fl.lang}}-{{fl.letter}}---fypage---{{fl.year}}',
    filter: 'H4sIAAAAAAAAA+2ZWU9bRxTH3/spKj/zcE0gSfOWfd/3VHlwI6uNSqkEtBKKIgHG1BBiG0QgZqfBQBDGZhGFSzFfxjO2v0XGnrOhtlf3ARLUXJ78+x+fuXNmhjl/Xb/65lv4C4VDZ75/Ffo52hk6E3rREmlvDzWEWiO/RA2q/kUdixv+PdLyW7T+vdaaHF+qxpZqsoHQ6wZQRyfN90EFwFg5sQYDMWBMd6d11yjEAGjMgaXS3iSOaYHGXBxSO7s4pgWKdRer40WMWaAxqSgGmkvifcntx7lYwFglt6AGlyEGQM8byJf3MAYgaiiP7HINNaBY9g+uAYDmklsoFWdxLhYor2+4mvmIeRYob3rZzBzzLPhZa92zUh4dwpgFisUGdM84xiy8fl6L2nMTaYtGxLGZLKhB1++xmV+sZvqwFAsYqy5k9HYeYgC05MWkmtjDJbdA0914xzEA2sY3axwDoLyxrJ5cwTwLNJeZj5wHQDUU/+IYAM+lIOdSOJD3tqDcBcyzQHm9KbMaKoG7zEyVZPfLqVy5P4PFEPPRm9Vv9k0anT5k+kZ8q7SLBwJAbmxLpPVH3thKPldZ6vK5sTqzWu0ar+SnsABisRVmRN6KGtD2rs9zDEBsBccAxBZyDEAcCxGzILaQYwBikdRqjBepBnKROqORNl4kPbZVHdv0uUiNTuMJ0Oofhd7IeqPUw6yHpe6w7gg9/B3p5qPQT7N+WuqnWD8l9ZOsn5R6M+vNUm9ivUnqXG9Y1hvmesOy3jDXG5b1hrle8/HAmY12dETFhqjcmM6/9bkhZ0E4S8o5UM6Rch6U86RcAOUCKRdBuUjKJVAukXIZlMukXAHlCilXQblKyjVQrpFyHZTrpNwA5QYpN0G5ScotUG6RchuU26TcAeUOKXdBuUvKPVDukXIflPukPADlASkPQXlIyiNQHpHyGJTHpDwB5QkpT0F5SsozUJ4dOBQ/dIr/0OSwclP/OBD8j2ug46X5Kg5Zcl1dGIHITy872vkKy/eqBHav9he/tkVrT33ewPaq8bDsVWq+8oFsiwU/tqU6NazfZ1X3loql8MqUkh/7pla3lEuXowWf1uc/7ZuX9fGyaCrZp1LrGLNAc9lNqfg2zsUC7eHOnJ5CewPA9iauM+gzAOh57/rYTgHQ8/aGeM0A/HbWI7JMXrbIy8J4WS2VKuidIh29OvixTF7Wx9OGjRaMU1FTc5hK/Blsi5mIMAIWvpRhCYzH8TcepDtcryPrdbheR9brcF2OrMvhuhxZl8N1mY+B4QkFhudYGp4Th2R4ql395cUuvDQtyIbdOyMatgGa4ep+pZDAS9oC5Q3n9EAW8yzwRRzX22geAPgC3yjtpOkCr4PouNUPOBcAirnLanUaYxboeRPrlX4Xn2eB8kZm9Ca927JAedvbOpEqucPGUGG2lGgdNv80FgjXwQKNsdZT6R7EbAufwZwYU2HsA026DqIPms7IfbAGFFtZNAuLMQv/27cUQdM//k0/aL5B8z2WzbfpkJqvV4P1/OEllqvMYdMGoDGTS+U0zh6AYunp8gr9+GCBLkSPHzsq6alKEt98ANCYs3Nqgi5ZCzSmx5sJPemKH1As0PP209x2ASjP4y2MKphlwt0GkLHshogZoPWcL5b+xh9eACgvOaMSE5hngc/QusqhYQGgMScGdAaNBwCvy5raH6N1qYNoTF/ijYbnG4Z/MwY+pxuYhsA0BKYhFJiGr940NAvTcESXuOqLm7Goh9eB7sMj+CX/q7r8g9+1g6YRNI2gaRx906j3jNefAExkaDU9KAAA',
    searchUrl: '/search/**----------fypage---/',
    class_parse: '.navbar-items&&.swiper-slide;a&&title;a&&href;.*/(\\d+)/',
    lazy: $js.toString(() => {
  /*
  功能：处理视频播放链接的获取与处理
  */
  async function processUrl() {
    const link = HOST + id;
    const html = await request(link);
    const $ = load(html);
    const js = JSON.parse($('script:contains(player_)').html().replace('var player_aaaa=',''));
    let playUrl = js.url;

    if (js.encrypt === 1) {
      playUrl = unescape(playUrl);
    } else if (js.encrypt === 2) {
      playUrl = unescape(base64Decode(playUrl));
    }

    const parseUrl = parseMap[js.from];

    if (parseUrl) {
      if (js.from ==='mytv') {
        const reqUrl = parseUrl2 + playUrl;
        const parseHtml = await request(reqUrl);
        const matches = parseHtml.match(/innerHTML = '<video src="([\w\W]*)" controls=/);

        if (matches && matches.length > 0) {
          playUrl = matches[1].trim();
        }
      } else {
        const reqUrl = parseUrl + playUrl;
        let html = await request(reqUrl);

        let dmkey = html.split('dmkey":"')[1].split('",')[0];
        let key = sha256(parseInt(new Date().getTime()/1000/3600)*3600 + 'brovod');

        const res = await req('https://jx.xdys.vip/v1/jx', {
          data: {
            dmkey: dmkey,
            url: playUrl,
            pbgjz: 'A',
            key: key
          },
          method: 'post',
          headers: {
            'Content-Type': 'text/plain'
          }
        });

        if (res) {
          playUrl = JSON.parse(res.content).jarod;
        }
      }
    }


    return JSON.stringify({
      parse: 0,
      url: playUrl,
      header: {
        'User-Agent': UA
      }
    });
  }
}),
    /*
    lazy: $js.toString(() => {
    /*
    let html = await request(reqUrl);
            //console.log(html);
            //"dmkey": "a97b811c47cb503f5ab45aa6c8a9628d",
            let dmkey = html.split('dmkey":"')[1].split('",')[0];
            //console.log('json', dmkey);

            let key = sha256(parseInt(new Date().getTime()/1000/3600)*3600 + 'brovod');
            const res = await req('https://jx.xdys.vip/v1/jx', {
                data: {
                    dmkey: dmkey,
                    url: playUrl,
                    pbgjz: 'A',
                    key: key
                },
                
        let html = fetch(input);
        let dmkey = html.split('dmkey":"')[1].split('",')[0];
        let key = sha256(parseInt(new Date().getTime()/1000/3600)*3600 + 'brovod');
     //   let json = JSON.parse(html.match(/r player_.*?=(.*?)</)[1]);
        let json = JSON.parse($('script:contains(player_)').html().replace('var player_aaaa=',''));
        let turl;
        let url = json.url;
        let from = json.from;
        let furl = HOST + '/static/player/' + from + '.js';
        if (json.encrypt == '1') {
            turl = unescape(url)
        } else if (json.encrypt == '2') {
            turl = unescape(base64Decode(url))
        } else {
            let str = fetch(furl);
            let jxurl = str.match(/src="(.*?)'/)[1] + url;
            let jxstr = fetch(jxurl);
      //      let config = {};
       //     eval(jxstr.match(/config[\s\S]*?}/)[0]);
            let data = fetch('https://jx.xdys.vip/v1/jx', {
                body: {
                dmkey: dmkey,
                    url: url,
                    pbgjz: "A",
                    vkey: key
                }, method: 'POST',
                headers: {
                    'Content-Type': 'text/plain'
                }
            });
            turl = JSON.parse(data).jarod;
        }
        if (turl && /m3u8|mp4|mp3/.test(turl)) {
  input = {
    jx: 0,
    url: url,
    parse: 0
  }
} else {
  input = input; 
  input.header = {
    'User - Agent': UA
  }
}

    }),
    */
}