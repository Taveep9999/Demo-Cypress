export const search_form = (
    word_test_correct: string,
    word_test_incorrect: string,
  ) => {
    cy.get(`input[type="search_form"]`)
      .clear()
      .type(word_test_correct)
      .wait(1500)
      .then(() => {
        cy.get(`tbody tr`).each((row, index) => {
          cy.wrap(row).within(() => {
            cy.get(`td`).then(($el) => {
              const text_Table: any = $el.text().trim();
              expect(text_Table).to.contain(word_test_correct);
            });
          });
        });
      });
  
    cy.get(`input[type="search_form"]`)
      .clear()
      .type(word_test_incorrect)
      .wait(1500)
      .then(() => {
        cy.get(`tbody tr`).then((rows) => {
          cy.wrap(rows).each((row, index) => {
            if (index >= 1) {
              cy.wrap(row).within(() => {
                cy.log("search fail");
                expect(true).to.be.false;
              });
            }
          });
        });
      });
  };

  describe('search_form', () => {
      it('search_form_can be use', () => {
        search_form('test1','asdasdasdasd');
      });
  });
  
