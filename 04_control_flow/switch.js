//BASIC SYNTAX:

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
//if break is not there , then when any case is matched then they give o/p of that and below except default

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}