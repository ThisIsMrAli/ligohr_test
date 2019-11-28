import JobOffer from "./models/jobOffer";
import Company from "./models/company";
import { seedData, allowedRequirements, calculateAcceptableOffers, isEqual, printInTerminal } from "./helpers";

const myQualifications = [...new Set([allowedRequirements[3], allowedRequirements[2]])];
const offers = seedData(10000);

//console.log(isEqual(['nodejs', 'ss'], ['ss', 'nodejs', 'ss']))
printInTerminal(calculateAcceptableOffers(myQualifications, offers), myQualifications);