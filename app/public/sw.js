// Create cache
let CACHE_ID = "neighborhood-map-v1";

// Files to cache
let filesToCache = ["/", "/index.html", "/manifest.json"];

self.addEventListener("install", function(e) {
  // Perform install of sw
  console.log("this happened");
  e.waitUntil(
    cahches.open(CACHE_ID).then(function(cache) {
      console.log("Opened cache");
      return cache.addAll(filesToCache);
    })
  );
});
