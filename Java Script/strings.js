// ! Stings are a sequence of character
// ! It is Immutable

let name="Divya"

//!  Length
    //  Size of a string

    console.log("Length of name:",name.length)

// ! toUpperCase
    // Convert into uppercase
    console.log("UpperCase:",name.toUpperCase())


// ! toLowerCase
    // Convert into Lowercase
    console.log("LowercaseCase:",name.toLowerCase())


// ! Trim
    // Aas pass ki whitespace ko hata dega
    h="        hy      ";
    console.log("Trim:" ,h.trim())
    console.log("Length of h after trim:",h.length)

// ! includes
    // Particular word is present or not

    let q="Javascript is an Awesome";
    console.log("'is' present or not:",q.includes("is"));

// ! startsWith
    // Btanata h ki particular word se line start h ya nhi??

    console.log("q , Javascript se start h ya nhi :", q.startsWith("Javascript"));
    console.log("name , divya se start h ya nhi :", q.startsWith("divya"));


// ! endsWith
    // Btanata h ki particular word se line end h ya nhi??

    console.log("q , Awesome se end h ya nhi :", q.endsWith("Awesome"));
    console.log("name , divya se end h ya nhi :", q.endsWith("divya"));



// ! indexof
    // index batayega ki konse index par word h

    console.log("Index of Javascript in q string:", q.indexOf("Javascript"))



// ! Lastindexof
    //  Piche se uska index batayega
    console.log("Index of Javascript in q string:", q.lastIndexOf("t"))


// ! slice
    // range me jitne element padhe h vo utne return krega

    console.log("Slice ::",name.slice(1,4));

// ! Substring
    // range me jitne element padhe h vo utne return krega

    console.log("Substring ::",name.substring(1,4));

// ! replace
    // replace when 1st occurence of that particular word
    console.log("Replace Divya to divu::", name.replace("Divya","Divu"))



// ! replaceall
    // replace all words from that particular word
    console.log("Replace a to o in q string:", q.replaceAll("a","o"))



// ! split
    // Split kr dega us word se  according the value of split
console.log("Split in q when a ocuurs",q.split("a") );