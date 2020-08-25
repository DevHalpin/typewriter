const sentence = "hello there from lighthouse labs";

let delay = 50;
let counter = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char); 
    counter++;
    if (counter === sentence.length) {
      console.log();
    }}, delay);
  delay += 50;
};

