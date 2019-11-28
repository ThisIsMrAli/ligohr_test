import { isEqual } from "../helpers";

class JobOffer {
    company;
    // requirements
    requirements = [];
    constructor(companyObject, requirements = []) {
        this.company = companyObject;
        this.requirements = requirements;
    }
    /**
     * calculates that person can is qualified for this offer or not
     * 
     * @param {object} personQualifications person skills
     * @returns {boolean}
     */
    isQualified(personQualifications) {
        return isEqual(this.requirements, personQualifications);
    }
}
export default JobOffer;