var expect = require('chai').expect;
import Company from '../models/company';
import JobOffer from '../models/joboffer';
import { calculateAcceptableOffers } from '../helpers';

describe('App functional', function () {
    describe('search offers', function () {
        var companies = [new Company('C #1'), new Company('C #2'), new Company('C #3'), new Company('C #4'), new Company('C #5')];
        var offers = [new JobOffer(companies[0], ['react', 'html5', 'css3']), new JobOffer(companies[1], ['html5', 'css3']),
        new JobOffer(companies[2], ['golang', 'nodejs']), new JobOffer(companies[3], ['python']), new JobOffer(companies[4], [])];
        it('should accept all job offers with no requirements', function (done) {
            expect(offers[4].isQualified(['nodejs'])).to.be.true;
            expect(offers[4].isQualified([])).to.be.true;
            done();
        });

        it('should get acceptable offers', function (done) {
            expect(calculateAcceptableOffers(['css3', 'html5'], offers)).to.have.length(2);
            expect(calculateAcceptableOffers(['react', 'css3', 'html5'], offers)).to.eql([offers[0], offers[1], offers[4]]);
            done();
        });
    });
});