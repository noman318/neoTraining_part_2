const events = require("events");
const emitter = new events.EventEmitter();

let evnt1 = function () {
  console.log("Event 1");
};
let evnt2 = function () {
  console.log("Event 2");
};
emitter.on("myEvent", evnt1);
emitter.on("myEvent", evnt2);

emitter.removeListener("myEvent", evnt1);
emitter.emit("myEvent");
