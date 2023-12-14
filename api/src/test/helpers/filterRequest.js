import { expect } from 'chai';
import { filterFulfilledRequests } from "../../helpers/index.js";

describe('filterRequest', () => {
  it('should filter fulfilled requests', () => {
    const requestMocks = [
      { status: 'fulfilled', value: 'Result 1' },
      { status: 'rejected', reason: 'Error 1' },
      { status: 'fulfilled', value: 'Result 2' },
      { status: 'fulfilled', value: 'Result 3' },
    ];

    const result = filterFulfilledRequests(requestMocks);

    expect(result).to.be.an('array');
    expect(result).to.have.lengthOf(3);
    expect(result).to.include.members(['Result 1', 'Result 2', 'Result 3']);
  });
});
