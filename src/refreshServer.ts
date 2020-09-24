export const evtSource = new EventSource(
  "http://localhost:8321/refresh-events/SceneA.html"
);

evtSource.addEventListener("refresh", () => {
  window.location.reload();
});
