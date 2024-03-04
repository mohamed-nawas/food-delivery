import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { signup } from '../../../pages/Signup/api';

const mock = new MockAdapter(axios);

describe('signup function', () => {
  afterEach(() => {
    mock.reset();
  });

  it('should return success response when signup succeeds', async () => {
    const name = 'John';
    const email = 'john@example.com';
    const pwd = 'password';

    const responseData = {
      status: 200,
      data: {
        status: 'success',
        message: 'Signup successful',
        data: {
          email,
          token: 'exampleToken',
        },
        displayMessage: 'Signup successful',
        statusCode: 200,
      },
    };

    mock
      .onPost(`http://localhost:8080/food-delivery/api/v1/auth/signup?name=${name}&email=${email}&pwd=${pwd}`)
      .reply(200, responseData);

    const result = await signup(name, email, pwd);

    // Adjust the assertion to check only relevant properties
    expect(result.data.data).toEqual(responseData.data);
    expect(result.status).toEqual(responseData.status);
  });

  it('should return error response when signup fails', async () => {
    const name = 'John';
    const email = 'john@example.com';
    const pwd = 'password';

    const errorResponseData = {
      status: 400,
      data: {
        status: 'error',
        message: 'Invalid email',
        displayMessage: 'Invalid email',
        errorCode: 123,
      },
    };

    mock
      .onPost(`http://localhost:8080/food-delivery/api/v1/auth/signup?name=${name}&email=${email}&pwd=${pwd}`)
      .reply(400, errorResponseData);

    try {
      await signup(name, email, pwd);
    } catch (error: any) {
      expect(error.data.data).toEqual(errorResponseData.data);
      expect(error.status).toEqual(errorResponseData.status);
    }
  });

  it('should handle network error', async () => {
    const name = 'John';
    const email = 'john@example.com';
    const pwd = 'password';

    mock
      .onPost(`http://localhost:8080/food-delivery/api/v1/auth/signup?name=${name}&email=${email}&pwd=${pwd}`)
      .networkError();

    try {
      await signup(name, email, pwd);
    } catch (error) {
      expect(error).toEqual({
        data: {
          message: 'Something went wrong, please try again',
        },
      });
    }
  });
});
