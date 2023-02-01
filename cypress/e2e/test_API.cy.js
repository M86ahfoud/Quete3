// <reference types="cypress" />

describe('Vérification the API', () => {
  
  it('Test_API', () => {
    cy.fixture('datas.json').as('userdata');
    
    cy.get('@userdata').then(datas => {
      datas.forEach(user => { 
          cy.apisimilartest(`${user.Name}`)
          
          .then(resp => {
            expect(resp.status).to.equal(200);
            expect(resp.body.Similar).to.have.property("Info");
            expect(resp.body.Similar).to.have.property("Results");
            expect(resp.body.Similar.Results[0]).to.not.be.null;
            expect(resp.body.Similar.Results).to.have.length(20);
            expect(resp.body.Similar.Info).to.have.length(1);
          })
         
          
        });
      })
      
      
    })

  })
  