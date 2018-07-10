alert("Its Working");
document.write("<pre>")
var size,
    parseSize,
    i;
size = window.prompt("Enter the size of Diamond(Only Even Value)", "10");
parseSize = parseInt(size);
i = parseSize / 2;
sCounter = i;
for (var spaces = 1; spaces <= i; spaces++) {
    document.write(" ");
}
document.write("*");
for (var row = 1; row <= i;) {
    document.write("<br>");
    sCounter--;
    starCounter = (row * 2) + 1;
    for (var space = 1; space <= sCounter; space++) {
        document.write(" ");
    }
    for (var star = 1; star <= starCounter;) {
        document.write("*");
        star++;
    }
    ++row;
}