//? Port To get Storage

export const StorageFlag: JSON = JSON.parse(localStorage.getItem("storage"));

export function Storage(app: Elm) {
  try {
    app.ports.save.subscribe((storage: JSON) => {
      localStorage.setItem("storage", JSON.stringify(storage));
      app.ports.load.send(storage);
    });
  } catch (err) {
    console.log(err);
  }
}
