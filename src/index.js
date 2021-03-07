module.exports = function toReadable (number) {
  	let result = "";
  	let myNumber = number;
  	const units = ["zero","one","two","three","four","five","six","seven","eight","nine","ten", "eleven","twelve",
      "thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
  	const tens = ["","ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];

    if (myNumber >= 100){
  		result = units[Math.trunc(myNumber/100)] + " hundred";
        if(myNumber%100 === 0) {return result;} else { result += " "; myNumber = myNumber%100;}
  	}
  	
  	if (myNumber < 20){
  		result = result + units[myNumber];
  	} else 	if (myNumber%10 === 0){
		result = result + tens[myNumber/10];
  	} else result = result + tens[Math.trunc(myNumber/10)] + " " + units[myNumber%10];
  	return result;
}
