
function convert(amount = 10, countryFrom = "INDIA", countryTo = "USA"){
    if(countryFrom === "INDIA" && countryTo === "USA"){
        return `USD$ ${amount * 86.60}`
    }else{
        console.error("error !")
    }

}

console.log(convert(10, "INDIA", "USA"));
