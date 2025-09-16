const args = process.argv.slice(2);
const size = Number(args[0]);

if (Number.isNaN(size)) {
  console.log("Missing size");
} else {
  for (let i = 0; i < size; i++) {
    console.log("X".repeat(size));
  }
}
