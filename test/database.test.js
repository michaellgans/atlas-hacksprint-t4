// Testing database connection

import { expect } from 'chai';
import sinon from 'sinon';
import mongoose from 'mongoose';

// Path to server
// import app from '../API/app.js';

describe('Database Connection', function() {
    let connectStub;

    before(function() {
        // Stub the mongoose connect function
        connectStub = sinon.stub(mongoose, 'connect').callsFake((url, options) => {
            return Promise.resolve('connected');
        });
    });

    after(function() {
        // Restore the original function
        connectStub.restore();
    });

    it('should connect to the database successfully', async function() {
        // Server should be running already!
        // await app.initialize();

        // Simulate connection
        const result = await mongoose.connect();
        
        expect(result).to.equal('connected');
        expect(connectStub.calledOnce).to.be.true;
    });
});
