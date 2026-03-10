'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "85a9dd12a0fe1279af80992173c01e87",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"manifest.json": "322078ecb6ac3bf4aca3a4178de6e9fa",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "d3d9ef6be25e1caba461f75c8344de1a",
"assets/AssetManifest.bin.json": "4edcd055bb80a4666d96d82646d6103f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/AssetManifest.bin": "da641de91f3bcc054cf391f82553aebe",
"assets/assets/Fig2_probabilites_good_outcome.png": "06c8734e84ed7060077188b49427b410",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/config": "9dd280ffd94562a73b55aa10f450023c",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/logs/HEAD": "71a77358be2473a2edbaaf0bc908243a",
".git/logs/refs/remotes/origin/gh-pages": "9ba938517e4b288e473c4995ce853348",
".git/logs/refs/heads/master": "71a77358be2473a2edbaaf0bc908243a",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/index": "4a496d4440cc7dc0bdefe510ee4969ed",
".git/COMMIT_EDITMSG": "194fb1ec0980e43a4c50c292e683a51c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/remotes/origin/gh-pages": "1f92f93656c92fa75db5a21054cf998c",
".git/refs/heads/master": "1f92f93656c92fa75db5a21054cf998c",
".git/objects/95/c1e6543fa9c6373d160cde1d91a0ce71608cf7": "55a8357d86b16638217b587877e58bf5",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/19/73acbc0905f308fd7898b7ee0575eb9bd91cd2": "e144a3a8ac75800016ce9f1bc4f6b028",
".git/objects/e6/3375b5cbe19ddf9fe6229ea4cb8693b43b1087": "03438d649d3a9049165d61c0d3f3cbd2",
".git/objects/13/af0b554d21e8d0c9fb821f92e9fa6fb37a40ba": "1a47e8129504831fe61136c265fc4873",
".git/objects/da/96291ad781993ce8d864aa0814429a36786590": "8b404a17145b5cda4cef771baad9ae69",
".git/objects/eb/dda99f06114b6dc371634574d7b07935a777c7": "d188f4319b392b64a1f931b79ead429c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c5/cdd7613b2c1c52bf2029263b5fca2ef524d031": "2573eadcf7b837d38a8584fdf6bd8cab",
".git/objects/dc/1451609bde5bc645bcc167172ac293b11f31cf": "1043f6de8e0d0af26aff12728f7103d3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/e3/ef2c38142e92a7e66af12e9885c930c8dd5231": "a5c3c7215867cf3e367253a2f40680d4",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/3b/15984ebcb7ffa9a4fe9b5ac9eba4745fbc1ea8": "9a09540221c2c7ad78805439f1ec5869",
".git/objects/b3/81520f754a97ab31e9906749d7218963d299ee": "869cdf0367d961dbc8675c05ef08b7a5",
".git/objects/f1/ca1c0dd95078e142a99a51c06c1995a3335ecc": "cff98cbdaa4181b3fe0b8e0e56d6f886",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/21/f73b96359865cc8eaf0dc7451384711c87cb9a": "b346f67f132f12fd016a1efa5251d019",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/d8/a16ae2d9cf439aff7462acdeeb055b16f01bad": "693fc72259bf1f72fa82623f3c7b2d59",
".git/objects/24/655d48d40c4b0e791dd807dd703b9fc3fbb2f2": "d1b9ad029222079c9c7ede37e5b9b8c9",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/ad/b1658956cfa539b25169cd5201b01a9f0d3d58": "597d75d6d62d8748f45fe59108c0571a",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b6/99bb7a14ecb272ded9a8fb07660c53d96e488f": "e9f3aafb6d5a38b12f3abe7b75d95ba9",
".git/objects/e7/6bb67d3a4a14a2a6eada725ae298b06af64094": "587dbe5a1d430770a3219e771f1aad5e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/e5/5ec6c5f9f5deedf67a915fdc28fe7108ac02b1": "cd792353f902d7e78de44578d766d738",
".git/objects/04/2fc93a845f3bc6c5f02eccd8c8907256853f98": "6d8c688ac1e80e6a44658fd7aeec644f",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/5f/3a59f0f0ed67ba1642a9157ac86660cbba3517": "5de3311b02f78e78aad836bc6303edb2",
".git/objects/91/e62c1220d9cda6bd23eb16760962691cc19b9e": "d11474b1e0d0e23ff61c0772c8b06d11",
".git/objects/b8/65966dcb97344297ad3693cdfdd57ff8734597": "6384b0635457e6ba698aac4919787dd7",
".git/objects/af/888ad1ab9af0862bbdef51c8de90e9a38048a0": "0c0560655283acf8e149cd84c65d1aec",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/ed/7c1b55e0ceb9bf20e9ff00ecba09b736f9c820": "38285486c28ca064716625f2aedede0e",
".git/objects/84/f1d4a4e68a4fe12dc8f62da29706de207ced21": "83a85fbb22df5452d8f074e1fcb71d55",
".git/objects/87/6e1e47078c33968b7632e85d7c64e782c1fa09": "4cb2ae0c385299aa09ac1768b10bd15f",
".git/objects/bd/73b41e36772bbf1969c8945af87340ef5566fd": "3a5cc759a3e65741a9e8aa6ecaa1c95a",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/2b/c43e9be0a7679a96a58fd78fe488cec536518b": "73e86223db4e1badd06cd4f908f2caf4",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c8/baf6404eb94313c8b46ca989ea39e952ceb9d1": "d9eb973c4063892ab46873eee3f85a0a",
".git/objects/97/76d5cdee753135deb71c0598f1d0cd4c8eec88": "d4d6cbdf6757930b3ff1adfcde13c4bc",
".git/objects/98/fd0314be0af3b67347300351aee97ae4df2c1e": "48ffe4c7c7bfc3aaf6cade06cf648583",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/1f/b78e7a7a607dca686cc8be1f7d6c5b563a54e8": "751961b567fa2f73ec58b3032b830850",
".git/objects/32/a430d41f0657290ef7a2cdb9c1411b9514e81b": "5437e390d67bcaf2795e013d973b9910",
".git/objects/34/1b481a14cb8dd9d0bf5d48a7374868565a27b5": "f17a61369f22627a8f4cd160005fa26d",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/01/ba3217b6d80ff20f03ceccf50229c817624961": "c9188667e12c009ff1259f0f994af03a",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/79/30bc444d151c4e673a24c892d5f013d160d5e5": "2e77ec25321b1aad8600e4e99edabd25",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/83/0205008d5f5642662807bf49473ec5812a90d0": "d0e4cab361917be3c34b89051708c263",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/2a/bb5870d7068e101557770bc718787b590de5d4": "5e1ec7f51f91847c6a762506272cc1d5",
".git/objects/6d/40804c38c0312d821e7e57169ae73a93c32da0": "9568314b91bfb63f9b70bde3721603fd",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/38/419f042d825e01e2476ea9955d383d758dde6f": "49539ce2640507d4896fab36e6f98783",
".git/objects/67/689f12dbcf684c76496f69e372632a9409763c": "60402f7b298b49abd2b0dc67b336db12",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/de/d33212d4fdcc9016973f850b1aaba6a1c5d7f3": "e5013d64f26ba7418d03a4b2b2677de2",
".git/objects/cc/3e87b3ff1451c7043def230de0c3ddfaba5fca": "e01cc6e28bc3c35663d63f97475c3f3a",
".git/objects/a6/c4b9f84cc1cc4e3479682bacc852fe01bce2b5": "db96f6eff68a792a6c36cfb20f39b57c",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/71/40b90fe640a28704ddcc57689bcc27bc880c03": "d01ba92ad5e42cdfdc1c73e04e7a66b2",
".git/objects/a0/3f1408d3e87940ee802f69bea3ba354577342c": "0d7e4197c0eac6b866d018e2bf9f2bc7",
".git/objects/3e/25fb2b26c041a4377ada89715aff12e25ba382": "e48fdedf72b64b69d0a30ff150d3c56f",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/fa/ce2cf8ad04944655ca92753fc7c180402ba8e3": "b5611ded96357cb06d0b885375f00570",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/0b/ec848740e5312a2e4bf9519c96bd751f1beab2": "8a46628b19ef22ea2500cdeda3d601db",
".git/objects/a7/4e42edfdf65b10e96b8e7a05c2a58faf13aad3": "b3a13730dc5b190129a37ba432565512",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/10/9fc57ee6ee0941edebc0aa8acc98b8632fb14e": "aacee0b9419077409c4747eb82bcd3e6",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/f0/e68b697b9402454e5b1e527acd3223d943b180": "1ef485b581f68953ba65fd58331e291d",
".git/objects/f0/e903a5c62880b575593c383a15d807fd15d1ea": "caa9c8909ae21ef5316d43274fd0b75b",
".git/objects/1c/bc6af5834947797d426c881ab38dcbcc227bd2": "50893b09c11c9fec68077cb084361ffa",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
"main.dart.js": "938741d7a2609baf8f5793a7953bda4a",
"flutter_bootstrap.js": "22bbdd9e9b7c97022f07ec5d50dcc269",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "b742e63df92c5e18c3de88aee409b9cd",
"/": "b742e63df92c5e18c3de88aee409b9cd",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
