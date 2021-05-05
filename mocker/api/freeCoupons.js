/**
 *
 * type: 1 生效中 background-image: linear-gradient(200deg, #FFA000 0%, #FF8F00 100%);
 *       2 已领取且叠加  background: #00C250;
 *       3 普通已领取 background: #FFF2EA;
 *       4 商户优惠券 width:170px; height:215px;
 */
module.exports = () => ({
  'coupons|2': [{
    type: 4,
    name: '超优汇率券',
    tip: '7天内笔笔有效',
    icon: '@image',
    HKD: 100,
    RMB: 85.41,
    RMBE: 85.80,
  }],

})
