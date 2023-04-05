import { BooleanPayload } from 'src/utils/boolean-payload';

type SuccessfulPayload = {
  code: number;
  body: string;
};

type FailurePayload = {
  code: number;
  message: string;
};

const fetchAPI = (
  param: string
): BooleanPayload<SuccessfulPayload, FailurePayload> => {
  if (param === '1') {
    return {
      isTruthy: true,
      payload: {
        code: 200,
        body: '<html>\n<head>\n<title>Hello World</title>\n</head>\n<body>\n<h1>Hello world</h1>\n</body>\n</html>',
      },
    };
  } else {
    return {
      isTruthy: false,
      payload: {
        code: 503,
        message: 'unexpected error occurred',
      },
    };
  }
};

const resp = fetchAPI('any');

if (resp.isTruthy) {
  console.log(resp.payload);
} else {
  console.error(resp.payload);
}
