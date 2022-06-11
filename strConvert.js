// function DNAtoRNA(dna) {
//   return dna.replaceAll("T", "U");
// }

// function DNAtoRNA(dna) {
//   return dna.replace(/t/gi, "U");
// }

const DNAtoRNA = (dna) => dna.split("T").join("U");

console.log(DNAtoRNA("TTT"));
