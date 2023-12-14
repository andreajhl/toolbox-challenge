import chai, { expect, use } from "chai";
import chaiHttp from "chai-http";
import { app } from "../../../index.js";

use(chaiHttp);

describe('Routes', () => {
  describe('GET /files/data', () => {
    it('should return a formatted data of files without queryParams', async () => {
      const res = await chai.request(app).get('/files/data');

      expect(res).to.have.status(200);
      expect(res.body).to.be.an('array');
    });

    it('should return formatted data from existing query parameter', async () => {
      const res = await chai.request(app).get('/files/data?fileName=test2.csv');

      expect(res).to.have.status(200);
      expect(res.body).to.be.an('object');
    });

    it('should return an error when query parameter does not exist', async () => {
      const res = await chai.request(app).get('/files/data?fileName=test');

      expect(res).to.have.status(404);
      expect(res.body.message).to.equal('Not Found');
    });
  });

  describe('GET /files/list', () => {
    it('should return a formatted data of files', async () => {
      const res = await chai.request(app).get('/files/list');

      expect(res).to.have.status(200);
      expect(res.body).to.be.an('array');
    });
  });
});

