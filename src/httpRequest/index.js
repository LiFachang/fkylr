import axios from 'axios'
import qs from 'qs'
import Bus from '../bus'

let API_HOST = ''
if (process.env.NODE_ENV === 'production') {
  API_HOST = 'http://5iwork.bacic5i5j.com/mobile-sales-restful/house_customer/house_source_insert'
} else {
  API_HOST = 'http://uat.cbs.bacic5i5j.com/mobile-sales-restful/house_customer/house_source_insert'
}

// 配置请求默认项
axios.defaults = {
  timeout: 10000,
  headers: {
    'Conent-Type': 'application/json'
  }
}
// 设置请求拦截器
axios.interceptors.request.use(config => {
  // 可在这里加请求数据的动效loading
  Bus.$emit('loading', '加载中...')
  return config;
}, error => {
  return new Promise.reject(error);
})
// 设置响应拦截器
axios.interceptors.response.use(res => {
  // 在这里取消请求数据的动效loading
  Bus.$emit('unloading')
  return res.data
}, error => {
  // 在这里取消请求数据的动效loading
  return Promise.reject(`响应code：${error.status}\n响应结果：${error.response}`)
})
/**
 * 封装axios.get请求
 * @param {String} url [请求url地址]
 * @param {Object} params [请求携带参数]
 */
export const ajaxGet = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.get(API_HOST + url, {
      params: params
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error);
    })
  })
}
/**
 * 封装axios.post请求
 * @param {String} url [请求url地址]
 * @param {Objeect} params [请求携带参数]
 * @param {String} responseType [响应数据格式]
 */
export const ajaxPost = (url, params, responseType) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: API_HOST + url,
      data: params,
      // responseType: responseType || 'json'
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error);
    })
  })
}
/**
 * 封装axios.all并发请求
 * @param {Array} queryList [请求配置项, eg:[{method:'get', url:'api/data'}]]
 */
export const ajaxAll = (queryList) => {
  let query = queryList.map((item) => {
    if (item.method === 'get') {
      return ajaxGet(item.url, item.params)
    } else {
      return ajaxPost(item.url, item.params, item.responseType)
    }
  });
  return new Promise((resolve, reject) => {
    axios.all(query).then(accpt => {
      resolve(accpt)
    }).catch(error => {
      reject(error);
    })
  })
}
