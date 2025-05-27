'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d122b11e3a6a02803af1a6f2c2a506e1",
"assets/AssetManifest.bin.json": "6d4db327e02a00d3e5206544b9d0fa24",
"assets/AssetManifest.json": "e833d906f8d3048f57452abf97ebfc39",
"assets/assets/audio/correct_1.mp3": "b2c02536403bc1994d1052537c5eec3f",
"assets/assets/audio/correct_2.mp3": "702ca166eddc2a7774f63184442dd09e",
"assets/assets/audio/correct_3.mp3": "6be9fc8bf9432f192388760559d630c4",
"assets/assets/audio/correct_4.mp3": "0db18917ae7b6f377ba4b94fb75d1244",
"assets/assets/audio/correct_5.mp3": "a758c9930b497efbd0da1316ac606203",
"assets/assets/audio/correct_6.wav": "8e0ffe659918cf3d0c767b4435641d76",
"assets/assets/audio/correct_7.wav": "db78e8c4a33e32a371df317f7233f247",
"assets/assets/audio/correct_8.wav": "8851c3d9da8b4dca67d56376f5320046",
"assets/assets/audio/not_correct_1.mp3": "64d2249881734068f2ae2bddeb0d98fa",
"assets/assets/audio/not_correct_2.mp3": "1f954239d4caa07790bf3ceb1704dd99",
"assets/assets/audio/not_correct_3.mp3": "da708dc46bff092541637b82709f9c16",
"assets/assets/audio/not_correct_4.mp3": "ded14cadf027cfb02472276c75e8c322",
"assets/assets/audio/not_correct_5.mp3": "4d06e453bbffd2ae00008dc325b5a87b",
"assets/assets/audio/not_correct_6.wav": "31fcd01c23fdf71093fb09d8469af6e4",
"assets/assets/audio/not_correct_7.wav": "08a3aecbdf531460b74fa5d708496194",
"assets/assets/audio/not_correct_8.wav": "54ff82c4e2c515343599eb34a158be0f",
"assets/assets/images/backgrounds/back1.gif": "5f7a147e1cd3191e96cd6e511110bc2a",
"assets/assets/images/backgrounds/back2.gif": "b0cc70e529101dea0720ae28e17de062",
"assets/assets/images/backgrounds/dandelion.gif": "e41468b5db4f9e77487b8ccc81b0d3e8",
"assets/assets/images/backgrounds/elephants.gif": "dafa5d4483287ae05a80fa74655cfdb6",
"assets/assets/images/backgrounds/flowers.gif": "c51a159f0e51011f9382c99d5d126dea",
"assets/assets/images/backgrounds/fluid.gif": "d0fc81f43aef8b31bdb663c65fd5ebab",
"assets/assets/images/backgrounds/road.gif": "746b60691d2b4ab2c0ebf254aae134d7",
"assets/assets/images/backgrounds/rocks.gif": "4f8933f237308fb973d7822431224986",
"assets/assets/images/backgrounds/submarine.gif": "dfce6e660b0e995037dc5ed84cd6b889",
"assets/assets/images/backgrounds/sunrise.gif": "d757e9a82c599ab4634ebc5f20dbc82f",
"assets/assets/images/dashboard/alphabets.gif": "107850f512e76f1006c2f7f431a7eb49",
"assets/assets/images/dashboard/animals.gif": "a205f9ee60e4b902d7351c3b538221cf",
"assets/assets/images/dashboard/birds.gif": "aa58306b9eb711c5f34e2b282e48b966",
"assets/assets/images/dashboard/colors.gif": "2035ed19265e612a9cbfec43a8d379e1",
"assets/assets/images/dashboard/flowers.gif": "689d5611cfb06c614c242e774093a1b7",
"assets/assets/images/dashboard/fruits.gif": "467a8a9a94ec841579275cf6e2e336ec",
"assets/assets/images/dashboard/insects.gif": "25101ac69c9e5aa342e063ff914f6252",
"assets/assets/images/dashboard/numbers.gif": "1f11d13f5068c8dff661f332856ff766",
"assets/assets/images/dashboard/objects.gif": "37b510a29ec7dd9223fa2c7d5b693557",
"assets/assets/images/dashboard/reptiles.gif": "c640a2211acf7f7a981e688a6d8e4e9b",
"assets/assets/images/dashboard/sea_animals.gif": "a14c5a27ee666b3c1eeaed24c32c9202",
"assets/assets/images/dashboard/shapes.gif": "f4bb8adce53deba49c0e59b3a3748de2",
"assets/assets/images/dashboard/trees.gif": "0a7f009a44a2b84eca1ed9f106b542af",
"assets/assets/images/dashboard/vegetables.gif": "593fd1cabcab3421f6359b2182cd09c6",
"assets/assets/images/dashboard/vehicle.gif": "431d5328ae1c96fd7e29c482480625bf",
"assets/assets/images/pop_confetti.gif": "1222261adab63b7c3e7aacf9945af83d",
"assets/assets/images/pop_fireworks.gif": "f69ad7bfa24a8c6165b753f4bad04777",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "4a2e114d8161022f91c745c3ae16c9a4",
"assets/NOTICES": "9e179b604e1ff5069ae064b41e06dc56",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.ico": "20178bea361e787d62cf91d3f5828d7b",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "1fe3ea5e3239a01a5da2317126f1c960",
"icons/Icon-192.png": "ec2971c73b9bee8250b624daac5b5010",
"icons/Icon-512.png": "005499350770d520bfbce86b4acb9432",
"icons/Icon-maskable-192.png": "25cd8cb66bf2f354e8073c5dd4907441",
"icons/Icon-maskable-512.png": "2cd6662c2dc33ac89f769f1f98de03e0",
"index.html": "e877f132cc44357887e918a04bcd1756",
"/": "e877f132cc44357887e918a04bcd1756",
"main.dart.js": "64de6f3bc37c89db3751da022bca6a5f",
"manifest.json": "7740c39d44c3f7111e75693e550398d0",
"version.json": "af80abf3a295e2bec48ecf6ab8315101"};
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
