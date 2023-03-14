const times = process.argv.slice(2);

for (const time of times) {
  if (time > 0 && !isNaN(time) && time === !undefined) {
    setTimeout(() => { process.stdout.write('\x07'); }, time * 1000);
  };
};