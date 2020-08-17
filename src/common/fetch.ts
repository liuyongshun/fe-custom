import { useSnackbar } from 'notistack';
import { CodeMessage, ErrorField, RequestHeader } from './types';
import currEnvConfig from './constants';
// =======================================start==============================================
// fetch 不会发送 cookies。除非你使用了credentials 的初始化选项。credentials: 'same-origin',
// function postData(url, data) {
//   return fetch(url, {
//     body: JSON.stringify(data),        // must match 'Content-Type' header
//     cache: 'no-cache',                 // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin',        // include, same-origin, *omit
//     headers: {
//       'user-agent': 'Mozilla/4.0 MDN Example',
//       'content-type': 'application/json'
//     },
//     method: 'POST',                    // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors',                      // no-cors, cors, *same-origin
//     redirect: 'follow',                // manual, *follow, error
//     referrer: 'no-referrer',           // *client, no-referrer
//   })
//   .then(response => response.json())   // parses response to JSON
// }
// =======================================end==============================================

const { enqueueSnackbar } = useSnackbar();

const codeMessage: CodeMessage = {
  400: '请求出错，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
};

const methods = ['POST', 'PUT', 'DELETE'];

// 错误状态校验
const checkStatus = (response: any) => {
  if (response.status >= 200 && response.status < 500) {
    return response;
  }
  const errortext = codeMessage[response.status];
  let error: ErrorField = new Error(errortext);
  error['resStatus'] = response.status;
  error['response'] = response;
  throw error;
};

export default async function request(
  url: string,
  options: object,
  config: object
) {
  const defaultOptions: RequestHeader = {
    credentials: 'include',
    headers: {
      'X-Access-Token': window.sessionStorage.getItem('token'),
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache'
    }
  };

  // option 配置合并
  if (options && typeof options === 'object') {
    Object.entries(options).forEach((item: string[]) => {
      const key: string = item[0];
      const value: any = item[1];
      if (typeof value !== 'object') {
        defaultOptions[key] = value;
      } else {
        defaultOptions[key] = { ...defaultOptions[key], ...value };
      }
    });
  }

  const newOptions = { ...defaultOptions };

  // 表单上传的特定请求头封装
  if (methods.includes(newOptions.method)) {
    if (!(newOptions.body instanceof FormData)) {
      newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...newOptions.headers
      };
      newOptions.body = JSON.stringify(newOptions.body);
    } else {
      newOptions.headers = {
        Accept: 'application/json',
        ...newOptions.headers
      };
    }
  }

  const urlAlias = config.urlAlias || 'baseUrl';

  return fetch(currEnvConfig[urlAlias] + url, newOptions)
    .then(checkStatus)
    .then((res: any) => {
      const response = res.json();
      const status = response.code;
      // 正常响应数据
      if (['00'].includes(status)) {
        return Promise.resolve(response.data);
      }

      // 错误响应
      if (!['00'].includes(status)) {
        enqueueSnackbar('请求错误', { variant: 'error' });
      }

      // 403页面
      if (['40113'].includes(status)) {
        window.location.href = '/403';
      }
      return Promise.reject(response);
    })
    .catch((e: any) => {
      // 500 页面
      const status = e.resStatus;
      if (status <= 504 && status >= 500) {
        window.location.href = '/500';
      }
      throw new Error(e.message);
    });
}
