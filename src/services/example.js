import request from '../utils/request';

export function query() {
  return request('/api/users');
}

// 导入新的数据
export function getProduct(params) {
  return request('/api/product?id='+params.id);
}

export function posts() {
  return request('/api/posts');
}