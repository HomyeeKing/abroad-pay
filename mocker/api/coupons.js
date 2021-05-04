/**
 *
 * type: 1 生效中 background-image: linear-gradient(200deg, #FFA000 0%, #FF8F00 100%);
 *       2 已领取且叠加  background: #00C250;
 *       3 普通已领取 background: #FFF2EA;
 */
module.exports = () => ({
  coupons: [
    {
      type: 1,
      name: '超优汇率券',
      tip: '7天内笔笔有效',
      icon: '@image',
      HKD: 100,
      RMB: 85.41,
      RMBE: 85.80,
    },
    {
      type: 2,
      name: '境外通用券',
      tip: '15天内有效',
      threshold: 3,
      icontip: '满300元可用',
      remain: 4,
      note: '使用后扫不同码可解锁下一张',
    },
    {
      type: 3,
      name: '屈臣氏专享券',
      tip: '21天内有效',
      threshold: 20,
      icontip: '满300元可用',
      note: '使香港地区屈臣氏线下门店可用',
    },
    {
      type: 3,
      name: '香港药妆店立减券',
      tip: '21天内有效',
      threshold: 50,
      icontip: '满300元可用',
      note: '香港地区的药妆种类商户中均可使用',

    },
  ],
})
