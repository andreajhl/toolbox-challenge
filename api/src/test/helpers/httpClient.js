import axios from "axios";
import { expect } from "chai";
import MockAdapter from "axios-mock-adapter";
import { httpClient } from "../../helpers/index.js";
import { URL } from "../../constants/index.js";

describe("httpClient", () => {
  let mock;
  const path = "files/data";

  beforeEach(() => { mock = new MockAdapter(axios) });
  afterEach(() => { mock.restore(); });

  it("should make a GET request with the correct headers", async () => {
    const responseData = { key: "value" };

    mock.onGet(`${URL}/${path}`).reply(200, responseData);

    const result = await httpClient.get(path);

    expect(result).to.deep.equal(responseData);
  });

  it("should handle errors gracefully", async () => {
    mock.onGet(`${URL}/${path}`).reply(500, { error: "Internal Server Error" });

    try {
      await httpClient.get(path);
    } catch (error) {
      expect(error.response.status).to.equal(500);
    }
  });
});
