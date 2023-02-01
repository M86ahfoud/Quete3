// <reference types="cypress" />

describe('template spec', () => {
  beforeEach(() => {
    

      cy.fixture('datas.json').as('userdata');
   
   
  })
  it('Test_API', () => {
    
    cy.get('@userdata').then(datas => {
      datas.forEach(user => {
        
        cy.request(
          `https://tastedive.com/api/similar?q=${user.Name}`
        ).then(resp => {
          expect(resp.status).to.equal(200);
          expect(resp.body.Similar).to.have.property('Info');
        })

        
      });
    })


})


})