import { getdata_api } from "./api_test.cy";

let datatable:any;

  
  export const checktable_with_api = () => {
    cy.visit("https://dashboard").wait(3000);
  
    getdata_api(
      "https://test/v1/dashboard"
    ).then((response) => {
        cy.get(`.table tbody tr`).its("length").then((rowCount) => {
        for (let i = 0; i < rowCount; i++) {
          cy.get(`tbody tr:eq(${i})`).then(($row) => {
            const $cells = $row.find("td");
            const api_response = response.body.records[i];

            datatable = {
              row1: $cells.eq(1).text().trim(),
              row2: $cells.eq(2).text().trim(),
              row3: $cells.eq(3).text().trim(),
              row4: $cells.eq(4).text().trim(),
              row5: $cells.eq(5).text().trim(),
            };

            expect(datatable.row1).to.eq(api_response.row1);
            expect(datatable.row2).to.eq(api_response.row2);
            expect(datatable.row3).to.eq(api_response.row3);
            expect(datatable.row4).to.eq(api_response.row4);
            expect(datatable.row5).to.eq(api_response.row5);
          });
        }
      });
    });
  };
  
  describe('compare_table_api', () => {
      it('checktable_with_api', () => {
        checktable_with_api();
      });
  });