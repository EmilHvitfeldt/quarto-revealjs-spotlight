window.RevealSpotlight = function () {
  return {
    id: "RevealSpotlight",
    init: function (deck) {
      Reveal.on('ready', (event) => {
        document.querySelectorAll(".spotlight").forEach(
          (div) => {
            div.dataset.id = "spotlight";

            if (div.dataset.left !== undefined) {
              div.style.left = div.dataset.left;
              delete div.dataset.left;
            }
            if (div.dataset.right !== undefined) {
              div.style.right = div.dataset.right;
              delete div.dataset.right;
            }
            if (div.dataset.top !== undefined) {
              div.style.top = div.dataset.top;
              delete div.dataset.top;
            }
            if (div.dataset.bottom !== undefined) {
              div.style.bottom = div.dataset.bottom;
              delete div.dataset.bottom;
            }
          }
        )
      });
    },
  };
};

