import request from '@common/fetch';
import api from '@common/api';
import { stringify } from 'qs';

export async function getTemplates() {
  return request(`${api.templateLists}`, {
    method: 'GET'
  });
}

export async function createFlow(payload) {
  const url = `${api.maModelCreate}`;
  return request(url, {
    method: 'POST',
    body: payload
  });
}
