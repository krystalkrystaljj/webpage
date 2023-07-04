import { request } from "@/network/request";

export function getTemperature () {
  return request({
    url: 'api/1.0/ll/enterprise/environment/getMeasureDataByDays',
    method: 'post',
    data: {
      "companySid":"1210","baseNo":"B002","measureTime":parseInt(new Date().getTime() / 1000),"itemName":"Temperature","days":"7"
    },

  })
}