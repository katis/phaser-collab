export function listenRefresh(file: string) {
  const evtSource = new EventSource(
    `http://localhost:8321/refresh-events/${file}`
  );

  evtSource.addEventListener("refresh", () => {
    window.location.reload();
  });
}
