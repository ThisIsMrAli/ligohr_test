import { isEqual } from "../helpers";

class JobOffer {
    company;
    // requirements
    requirements = [];
    constructor(companyObject, requirements = []) {
        this.company = companyObject;
        this.requirements = requirements;
    }
    isQualified(personQualifications) {
        return isEqual(this.requirements, personQualifications);
    }
}
export default JobOffer;