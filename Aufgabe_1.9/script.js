let i = 0;

while (i <= 100) {
  for (i = 0; i <= 100; i++) {
    if (i % 3 == 0) {
      console.log("fizz");
    }
    if (i % 5 == 0) {
      console.log("buzz");
    }
    if (i % 3 == 1 && i % 5 == 0) {
      console.log("fizzbuzz");
    }
  }
}
