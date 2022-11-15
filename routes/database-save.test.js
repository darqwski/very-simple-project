const { savePrimaryNumbers } = require('./database-saver')

const response = {
    send: jest.fn(),
}

describe('savePrimaryNumbers', () => {
    beforeEach(jest.clearAllMocks)
    it('should work', async () => {
        await savePrimaryNumbers({ body: [] }, response)

        expect(response.send).toBeCalled()
    })
})
