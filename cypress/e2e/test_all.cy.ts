import * as Api from "./Demo/api_test.cy"
import * as Compare from "./Demo/compare_table_api.cy"
import * as Login from "./Demo/login.cy"
import * as Search from "./Demo/search.cy"
import * as Validate from "./Demo/Validateform.cy"


describe('Demo_all_test', () => {
  describe('api_test', () => {
    it('canget_api', () => {
        Api.api_canBeUse()
    });
    it('check_use_notoken', () => {
        Api.No_token_api()
    });
    it('check_data_row in api', () => {
        Api.check_data_api()
    });
    it('test_post_api', () => {
        Api.test_post_api()
    });
    it('test_delete_api', () => {
        Api.test_delete_api()
    });
});

  describe('compare_table_api', () => {
    it('checktable_with_api', () => {
      Compare.checktable_with_api();
    });
});
  
  describe('login_test', () => {
    it('login', () => {
      Login.Login();
    });
    it('login_fail', () => {
      Login.Fail_Login();
    });
});

  describe('search_form', () => {
    it('search_form_can be use', () => {
      Search.search_form('test1','asdasdasdasd');
    });
});

  describe('validateform', () => {
    it('test_validate', () => {
        Validate.Emailinput_Validate();
        Validate.TypeEmail_Validate();
        Validate.Email_Validate_64();
        Validate.Password_require();
        Validate.Password_Validate_8();
        Validate.Password_Validate_24();
        Validate.FirstName_require();
        Validate.FirstName_Validate_32();
        Validate.LastName_require();
        Validate.LastName_Validate_32();
    });
});

});