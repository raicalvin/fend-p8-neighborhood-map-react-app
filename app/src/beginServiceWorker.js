export default function beginServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker.register("/sw.js", { scope: "/" }).then(
        function(reg) {
          console.log("ServiceWorker registered successfully.");
        },
        function(err) {
          console.log("ServiceWorker failed registration.");
        }
      );
    });
  }
}
