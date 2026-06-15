

console.log("Hospital Management System");

const prompt = require("prompt-sync")();

function details() {
    console.log("Enter All Important details for Scheduling Tests");

    // store values in object properties
    let patient = {};

    patient.name=prompt("Enter Patient's Full Name: ");
    patient.age=prompt("Enter Patient's Age: ");
    patient.dr_name=prompt("Enter Doctor Name: ");
    patient.mob_num=prompt("Enter Patient's Mobile number: ");
    patient.blood=prompt("Enter Patient's Blood Group: ");
    patient.test_name=prompt("Enter Test name: ");

    // show details
    console.log("\n--- Patient Details ---");
    console.log("Thank you,", patient.name);
    console.log("Age:", patient.age);
    console.log("Doctor Name:", patient.dr_name);
    console.log("Mobile Number:", patient.mob_num);
    console.log("Blood Group:", patient.blood);
    console.log("Test Name:", patient.test_name);


    return patient;
}

const detail = details();
