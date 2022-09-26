const args = process.argv.slice(2);

const timer = function (args) {
  let alarms = [];

  for (let alarm of args) {
    alarm = alarm * 1000;
    if (alarm) {
      alarms.push(alarm);
    }
  }

  if (alarms.length === 0) {
    console.log("No alarms found");
  }

  for (let alarm of alarms) {
    if (alarm / 1000 < 1) {
      console.log(`Alarm must be a number and higher than 1 `);
      break;
    }

    setTimeout(() => {
      process.stdout.write("\x07");
      console.log(`ALARM AT ${alarm / 1000} seconds`);
    }, alarm);
  }
};

timer(args);
