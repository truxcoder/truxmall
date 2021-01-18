import { request } from "./request"
export function getDetailData(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

//商品基本信息定义成类
export class Goods{
  constructor(itemInfo,columns,services){
    this.title = itemInfo.title
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discountDesc = itemInfo.discountDesc
    this.discountBgColor =itemInfo.discountBgColor
    this.salesVolume = columns[0]
    this.favs = columns[1]
    this.service1Name = services[2].name
    this.service1Icon = services[2].icon
    this.service2Name = services[0].name
    this.service2Icon = services[0].icon
    this.service3Name = services[1].name
    this.service3Icon = services[1].icon
  }
}
export class Shop{
  constructor(shopInfo){
    this.shopLogo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.cFans = shopInfo.cFans
    this.cGoods = shopInfo.cGoods
    this.cSells = shopInfo.cSells
    this.score = shopInfo.score
  }
}