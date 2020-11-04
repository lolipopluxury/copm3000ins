import request from 'umi-request';
import apiConfig from './apiConfig';

export function getTest(){
  return request.get(apiConfig.baseUrl)
}

export function getAuthInfo(){
  return request.get(`${apiConfig.fhirUrl}/metadata`)
}