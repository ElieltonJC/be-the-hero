const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
  it('should generate an unique ID', () => {
    // expect(2 + 2).toBe(4); // Aguardando resultado correto
    // expect(2 + 2).toBe(5); // Aguardando resultado errado
    const id = generateUniqueId();

    expect(id).toHaveLength(8);
  });
});