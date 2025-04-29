
/// <reference types="cypress" />

const baseUrl = 'http://localhost:3000'; // Replace with your actual baseUrl

describe('API Tests Converted from Postman', () => {
  
  it('GET /objects?id=3&id=4 - should return objects with ID 3 and 4', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/objects`,
      qs: { id: [3, 4] }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
      expect(response.body.length).to.eq(2);
      response.body.forEach(item => {
        expect(item).to.have.property('id');
        expect(item.id).to.be.oneOf(['3', '4']);
      });
    });
  });

  it('POST /objects - should create a new object', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/objects`,
      body: {
        name: "Apple MacBook Pro 16",
        data: {
          year: 2019,
          price: 1849.99,
          "CPU model": "Intel Core i9",
          "Hard disk size": "1 TB"
        }
      },
      headers: { 'Content-Type': 'application/json' }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id');
      expect(response.body.name).to.eq("Apple MacBook Pro 16");
    });
  });

  it('PUT /objects/:id - should update the object', () => {
    const testId = 'ff808181932badb6019680605e7d02c5';
    cy.request({
      method: 'PUT',
      url: `${baseUrl}/objects/${testId}`,
      body: {
        name: "Apple MacBook Pro 17",
        data: {
          year: 2019,
          price: 2049.99,
          "CPU model": "Intel Core i9",
          "Hard disk size": "1 TB",
          color: "silver"
        }
      },
      headers: { 'Content-Type': 'application/json' }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq("Apple MacBook Pro 17");
    });
  });

  it('PATCH /objects/:id - should partially update the object name', () => {
    const testId = 'ff808181932badb6019680605e7d02c5';
    cy.request({
      method: 'PATCH',
      url: `${baseUrl}/objects/${testId}`,
      body: { name: "Apple MacBook Pro 19" },
      headers: { 'Content-Type': 'application/json' }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq("Apple MacBook Pro 19");
    });
  });

  it('DELETE /objects/:id - should delete the object', () => {
    const testId = 'ff808181932badb6019680605e7d02c5';
    cy.request({
      method: 'DELETE',
      url: `${baseUrl}/objects/${testId}`
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.include(`Object with id = ${testId} has been deleted.`);
    });
  });

});
