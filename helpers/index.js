import lodash from 'lodash';
import Company from '../models/company';
import JobOffer from '../models/joboffer';
import Table from 'cli-table';
export const allowedRequirements = ['react', 'angular', 'html5', 'css3', 'nodejs' ,'bootstrap', 'vue.js', 'pwa', 'java', 'golang', 'python'];

export const isEqual = (searchObj, containerObj) => {
    return lodash.difference(searchObj, containerObj).length === 0;
}

const createRandomBooleanArray = (length) => {
    return Array.from({ length: length }, () => Math.floor(Math.random() * 2) === 1)
}

const createRandomJobOfferRequirement = () => {
    const boolArray = createRandomBooleanArray(allowedRequirements.length);
    return boolArray.map((val, index) => val === true ? allowedRequirements[index] : null).filter(val => val !== null);
}

export const seedData = (totalSeeds = 100) => {
    const seeds = [];
    for (let i = 1; i <= totalSeeds; i++) {
        const company = new Company('C #' + i);
        seeds.push(new JobOffer(company, createRandomJobOfferRequirement()));
    }
    return seeds;
}


export const calculateAcceptableOffers = (personQualification, offers) => {
    const acceptableOffers = [];
    for (var i = 0; i < offers.length; i++) {
        if (offers[i].isQualified(personQualification)) {
            acceptableOffers.push(offers[i]);
        }
    }
    return acceptableOffers;
}

export const printInTerminal = (offers, personSkills) => {
    const table = new Table({
        head: ['Company Name', 'Company Requirements', 'Your Skills']
        , colWidths: [20, 200]
    });
    offers.forEach(offer => {
        table.push([offer.company.name, offer.requirements, personSkills]);
    })
    console.log('Your skills matches ' + offers.length + ' companies:')
    console.log(table.toString());
}