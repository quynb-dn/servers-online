import { app } from "./app";

const start = async () => {
  console.log("Starting up...");
};

app.listen(3001, () => {
  console.log("Listening on port 3000!");
});

start();