const localName = "storage";

// @ts-ignore
export const StorageFlag: JSON = JSON.parse(localStorage.getItem(localName));

export function Storage(app: Elm) {
  try {
    app.ports.save.subscribe((storage: JSON) => {
      localStorage.setItem(localName, JSON.stringify(storage));

      app.ports.load.send(storage);
    });
  } catch (err) {
    console.log(err);
  }
}
