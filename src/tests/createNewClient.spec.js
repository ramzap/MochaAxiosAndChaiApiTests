import { expect } from 'chai';
import {createClient} from '../pageObjects/sourceryBooksPage';
var chai = require('chai') , chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('Client create test suite', async() =>{
    it('Should test that it is possible to create new client', async() =>{
        const responseFromClientCreate = await createClient();

        expect(responseFromClientCreate).to.have.status(200);
        expect(responseFromClientCreate.data).to.haveOwnProperty('clientId').to.be.not.null;
        console.log(responseFromClientCreate.data);
    })
})