describe('REST API Tests', () => {
    const baseUrl = 'https://api.restful-api.dev';
    let createdId = null;
  
    it('Create Object', () => {
      cy.request('POST', `${baseUrl}/objects`, {
        name: 'Apple MacBook Pro 16',
        data: {
          year: 2019,
          price: 1849.99,
          'CPU model': 'Intel Core i9',
          'Hard disk size': '1 TB'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq('Apple MacBook Pro 16');
        expect(response.body.data.year).to.eq(2019);
        expect(response.body.data.price).to.be.a('number');
        expect(response.body).to.be.an('object');
        createdId = response.body.id;
      });
    });
  
    it('Get All Objects', () => {
      cy.request('GET', `${baseUrl}/objects`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body[0].id).to.match(/1/);
        expect(response.body[0].data.color).to.eq('Cloudy White');
        expect(response.body[1].data).to.eq(null);
        expect(response.body[11].name).to.be.a('string');
      });
    });
  
    it('Get Objects by IDs (3 & 4)', () => {
      cy.request('GET', `${baseUrl}/objects?id=3&id=4`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body[0].id).to.contain(3);
        expect(response.body[0].name).to.eq('Apple iPhone 12 Pro Max');
        expect(response.body[0].data.color).to.be.a('string');
        expect(response.body[1].id).to.match(/4/);
        expect(response.body[1].name).to.eq('Apple iPhone 11, 64GB');
        expect(response.body[1].data.price).to.eq(389.99);
        expect(response.body[1].data.color).to.eq('Purple');
      });
    });
  
    it('Get Single Object (ID: 1)', () => {
      cy.request('GET', `${baseUrl}/objects/1`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.id).to.match(/1/);
        expect(response.body.name).to.eq('Google Pixel 6 Pro');
        expect(response.body.data.color).to.eq('Cloudy White');
        expect(response.body.data.color).to.be.a('string');
        expect(response.body.data.capacity).to.contain('128 GB');
        expect(response.body).to.be.an('object');
      });
    });
  
    it('Update Object (PUT)', () => {
      cy.request('PUT', `${baseUrl}/objects/${createdId}`, {
        name: 'Apple MacBook Pro 17',
        data: {
          year: 2019,
          price: 2049.99,
          'CPU model': 'Intel Core i9',
          'Hard disk size': '1 TB',
          color: 'silver'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.id).to.match(new RegExp(createdId));
        expect(response.body.name).to.eq('Apple MacBook Pro 17');
        expect(response.body.data.year).to.be.a('number');
        expect(response.body.data.color).to.match(/silver/);
        expect(response.body).to.be.an('object');
      });
    });
  
    it('Partially Update Object (PATCH)', () => {
      cy.request('PATCH', `${baseUrl}/objects/${createdId}`, {
        name: 'Apple MacBook Pro 19'
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.id).to.match(new RegExp(createdId));
        expect(response.body.name).to.eq('Apple MacBook Pro 19');
        expect(response.body).to.be.an('object');
        expect(response.body.data.year).to.eq(2019);
        expect(response.body.data.color).to.eq('silver');
      });
    });
  
    it('Delete Object', () => {
      cy.request('DELETE', `${baseUrl}/objects/${createdId}`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.contain(createdId);
      });
    });
  });
  