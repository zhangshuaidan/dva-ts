import request from '@/utils/request';
import address from '@/constants/address';
export async function FecthData():Promise<any>{
    console.log('API_HOST',address.API_HOST)
    return request(address.API_HOST+'/api/notices')
}