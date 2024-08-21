let TOKEN  = 'token';
const apiUrl = 'https://test/v1/dashboard'

export const data_api_check = [
    "user_id",
    "first_name",
    "last_name",
    "price",
    "key_id",
  ];

export const getdata_api = (URL: string) => {
  return cy.request({
    method: "GET",
    url: `${URL}`,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
};

export const No_token_api = () => {
  cy.request({
    method: "GET",
    url: apiUrl,
    failOnStatusCode: false,
  }).then((response) => {
    expect(response.status).to.eq(500);
  });
};  

export const api_canBeUse = () =>{
    cy.request({
        method: 'GET',
        url: apiUrl,
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
      });  
}
  
export const check_data_api = () => {
    getdata_api(
      "https://test/v1/dashboard"
    ).then((response) => {
        expect(response.body.records[0]).to.include.all.keys(data_api_check);
    })
}

export const test_post_api = () => {
    const requestBody = {
        user_id: '99',
        first_name: 'testfirst',
        last_name: 'testlast',
      };
      cy.request({
        method: 'POST',
        url: apiUrl,
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: requestBody,
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.user_id).to.eq(requestBody.user_id);
        expect(response.body.first_name).to.eq(requestBody.first_name);
        expect(response.body.last_name).to.eq(requestBody.last_name);
    });    
}

export const test_delete_api = () => {
    cy.request({
        method: 'DELETE',
        url: `${apiUrl}/99`,
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }).then((response) => {
        expect(response.status).to.eq(204);
      });    
}

describe('api_test', () => {
    it('canget_api', () => {
        api_canBeUse()
    });
    it('check_use_notoken', () => {
        No_token_api()
    });
    it('check_data_row in api', () => {
        check_data_api()
    });
    it('test_post_api', () => {
        test_post_api()
    });
    it('test_delete_api', () => {
        test_delete_api()
    });
});
