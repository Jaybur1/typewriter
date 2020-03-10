const sentence = "hello there from lighthouse labs";

const typewriter = str => {
  let timeout = 0;
  let fixed = str + '\n'
  for (const char of fixed) {
    setTimeout(() => {
      process.stdout.write(char);
    }, timeout);
    timeout += 50;
  }
};

typewriter(sentence);
