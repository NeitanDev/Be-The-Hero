const createId = require('../../src/utils/createId');

describe('Create an ONG Id', () => {
    it('should generate an unique ID', () => {
        const id = createId();

        expect(id).toHaveLength(8);
    });
});