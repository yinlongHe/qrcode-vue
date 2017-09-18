 // const url = 'http://betascan.vats.com.cn';
//const url = 'http://192.168.13.149:8080';
const url = '';


/**
 * 领奖中心
 * @params {String} /openid
 */

export const awardCenter = `${url}/award/index/`
/**
 * 抽奖
 * @params {String} /product_id/activity_id/uuid/type/openid
 */
export const drawPrize = `${url}/drawprize/`;

/**
 * 去领奖
 * @params {String} /openid/actwinid/prizeid/mobile/validcode/type/uuid
 */

export const awardAcceptPrize = `${url}/award/accept_prize/`;

/**
 * 获取短信验证码
 * @params {String} /mobile
 */
export const getCode = `${url}/award/validcode/`;

/**
 * 领奖中心，奖品详情
 * @params {String} /openid/id
 */
export const awardPrize = `${url}/award/prize/`;

/**
 * 领奖中心，配送地址
 * @params {String} /openid/id
 * @query {String} consignee 收货人
 * @query {String} mobile 手机号
 * @query {String} rgn_region_id 地区id
 * @query {String} address 详细地址
 */
export const awardDistribution = `${url}/award/distribution/`;

 /**
  * 领奖中心，自提获取二维码
  * @params {String} id
  */
 export const getQrcodeImageURL = `${url}/award/getQrcodeImage/`;

 /**
  * 领奖中心，获取附件的自提点
  * @param longitude 经度
  * @param latitud 维度
  */
 export const getBranchListURL = `${url}/award/getBranchList/`;

/**
 * 获取省市区
 * @params {Number} /parentid/
 */
export const rgnRegion = `${url}/award/rgnRegion/`;

/**
 * 获取促销记录
 * @param salesmanId 促销员id
 * @param productName 产品名称
 * @param startTime  扫码时间开始时间
 * @param endTime    扫码时间结束时间
 * @param timeType  时间类型：1、今天，2、近7天，3、近30天， 4、输入时间进行查询
 * @return
 */

export const promoterRecordURL = `${url}/getSaleLogForSalesman/`;

/**
 * 获取兑奖记录
 * @param salesmanId 促销员id
 * @param productName 产品名称
 * @param startTime  扫码时间开始时间
 * @param endTime    扫码时间结束时间
 * @param timeType  时间类型：1、今天，2、近7天，3、近30天， 4、输入时间进行查询
 * @return
 */

export const expiryRecordURL = `${url}/getStoreWinList/`;

/**
 * 兑奖记录详情点击链接
 * @param id 兑奖记录id
 * @return
 */

export const expiryRecordDetailURL = `${url}/getWinMessageDetail/`;

/**
 * 确认兑奖 按钮点击链接
 * @param id 兑奖记录id
 * @param storeId 网点id
 * @return
 */

export const confirmPrizeURL = `${url}/confirmWin/`;

/**
 * 溯源查询
 * @param type 
 * 扫码类型 2：历史普通码瓶码 （营销码）；3：普通码箱码 （物流码） ；4：组合码瓶码 物流码 ;
 * 5：代表组合码箱码（物流码）；6：代表普通码瓶码（营销码）7.普通码瓶码（物流码）
 * @param uuid 
 * return
 */
export const getSource = `${url}/award/querySource/`;
