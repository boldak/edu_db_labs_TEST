/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "487986f18f54972739c9c10fffdee1a5"
  },
  {
    "url": "assets/css/0.styles.69615230.css",
    "revision": "a9945f613599fe74f848816a2250c6ae"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.17dc7fc0.js",
    "revision": "235105471074525d1d2bdc9d1186bdf9"
  },
  {
    "url": "assets/js/11.32ba2003.js",
    "revision": "b012f550c9920cce59792eeb20924fd7"
  },
  {
    "url": "assets/js/12.f4d805b2.js",
    "revision": "45a0f424731485e8513dbf3f52453817"
  },
  {
    "url": "assets/js/13.b369ab95.js",
    "revision": "ff30346a2ae0704d1a7791e2ab06f152"
  },
  {
    "url": "assets/js/14.d7f079b2.js",
    "revision": "6b809a93916ba8b3fde674d26eee6270"
  },
  {
    "url": "assets/js/15.6c645099.js",
    "revision": "aa77fb53e439be07f83350085a0a672e"
  },
  {
    "url": "assets/js/16.d9cfeece.js",
    "revision": "c4198733324dbed8797b6c14c8c0fb70"
  },
  {
    "url": "assets/js/17.f829100a.js",
    "revision": "8dceb00f63fb206ccfb8c7c505caca82"
  },
  {
    "url": "assets/js/18.717e7c26.js",
    "revision": "d99739579ddb9931412d66dac19081b8"
  },
  {
    "url": "assets/js/19.7835ae59.js",
    "revision": "374df65b9b682f8b352e4cde19517798"
  },
  {
    "url": "assets/js/2.6b9b91be.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.cc00d6a7.js",
    "revision": "6057a59c83bbd86804bdaad145d96004"
  },
  {
    "url": "assets/js/21.dbbf4e39.js",
    "revision": "33394be7579b04f35da2641acd3c17ab"
  },
  {
    "url": "assets/js/22.fed602bb.js",
    "revision": "be0693706a1616c24e68a491dcd2af07"
  },
  {
    "url": "assets/js/23.9c9cf32f.js",
    "revision": "ababb98b2fce59099380a5d4ca80a377"
  },
  {
    "url": "assets/js/24.9364b685.js",
    "revision": "af5db62e23211f378001e561508a9cc3"
  },
  {
    "url": "assets/js/26.2b7d224e.js",
    "revision": "d09140fd6d4af5d21412c1e04e0338bb"
  },
  {
    "url": "assets/js/3.33d6b42d.js",
    "revision": "808ea9f2d864b4467fe90f16175227a8"
  },
  {
    "url": "assets/js/4.5d00dd71.js",
    "revision": "354b2b53903cf28623245afa41ac130d"
  },
  {
    "url": "assets/js/5.4b8fb81c.js",
    "revision": "b865b25b78848b369ebb4f7a7684bf5b"
  },
  {
    "url": "assets/js/6.37f402c4.js",
    "revision": "43bdcf1e529c99fca1e216d96833b9ee"
  },
  {
    "url": "assets/js/7.a2994458.js",
    "revision": "817c1a9fc1e6f84583934d814a9ab3f5"
  },
  {
    "url": "assets/js/8.d159d845.js",
    "revision": "229de9f470aa15983a689d6b1daa5fa3"
  },
  {
    "url": "assets/js/9.c0a843c2.js",
    "revision": "6fdef7e064583d735d435c9c7be58314"
  },
  {
    "url": "assets/js/app.6e3f9413.js",
    "revision": "003792e27a68fadb878e33dda628907e"
  },
  {
    "url": "conclusion/index.html",
    "revision": "6fbb02fa074940b64e54b834c0f0045f"
  },
  {
    "url": "design/index.html",
    "revision": "8923022f5d93a8f266359cc446602685"
  },
  {
    "url": "index.html",
    "revision": "41735fd0ed526d226abbd040578c8115"
  },
  {
    "url": "intro/index.html",
    "revision": "72c5fab60448c9ce903eb45e890b5dc7"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "39a8af397064b58eea739d50744ed5db"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "f9e9723751bca636290a3843e5aa0cce"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "34c5effd6abb9bfd63d34c373be7b97f"
  },
  {
    "url": "software/index.html",
    "revision": "11d4cf5feb0cb11821f31625e2d1d6ef"
  },
  {
    "url": "test/index.html",
    "revision": "d2b703cf5c0007e2341178f8f4d991b4"
  },
  {
    "url": "use cases/index.html",
    "revision": "aee909ce1a347857c4a60cd5269b27c8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
