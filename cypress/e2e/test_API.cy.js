// <reference types="cypress" />

describe('template spec', () => {
  beforeEach(() => {
    

      cy.fixture('datas.json').as('userdata')
    // let users = requier('../fixtures/data.json')
   
  })
  it('Test_API', () => {
    
    cy.get('@userdata').then(datas => {
      datas.forEach(user => {
        
        cy.request(
          `https://tastedive.com/api/similar?q=${user.Name}`
        ).as('user.Name')

        
      });
    })

//     cy.get('https://tastedive.com/api/similar?q=','userdata')
//         .then((response) => {
//             // expect(response.body.Similar.Results).to.have.length(20)
//             expect(response.body.Similar.Results[0]).have.property('Name')
            
//         })
})


})