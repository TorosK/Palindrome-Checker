function palindrome(str) {

  str = str.replaceAll(/[^a-z0-9]/gi, "")
  str = str.toLowerCase();
  console.log("str: " + str)
  
  let length = str.length;
  console.log("length: " + length);

  let half = Math.floor(length/2);
  console.log("half: " + half);

  let first = str.substring(0, half);
  console.log("first: " + first);

  let last = str.substring(length-half, length);
  console.log("last: " + last);

  last = last.split("");
  last = last.reverse();
  last = last.join("");

  console.log("last: " + last);

  if (first == last) {
    return true;
  }
  
  return false;
}

palindrome("eye"); 
console.log();
palindrome("eyeeye"); 
console.log();
palindrome("t3`?=07887 0Nlnlns fmgs,öl#¤&¤&)/)(/)"); 
console.log();
palindrome("racecar"); 
console.log();
