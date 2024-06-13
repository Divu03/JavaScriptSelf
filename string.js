let str = "divyesh kuchhadia";

let rstr = str.replace("o","m");
console.log(rstr);

let sstr = str.split("v");
console.log(sstr);

let lstr = str.length;
console.log(lstr);

let ccstr = str.charCodeAt(2);
console.log(ccstr);

let ssstr = str.substring(2,5);
console.log(ssstr);

let castr = str.charAt(2);
console.log(castr);

let cpastr = str.codePointAt(2);
console.log(cpastr);

let cstr = str.concat("hi from my side","second string");
console.log(cstr);

let restr = str.repeat(2);
console.log(restr);

let ewstr = str.endsWith("a",lstr);
console.log(ewstr,str[16]);

let swstr = str.startsWith("i",1);
console.log(swstr);

let iostr = str.indexOf("i",5)
console.log(iostr)

console.log(String.raw`hi i am divyesh you can follow me on x.com/divyesh11 $kuchhadia`)