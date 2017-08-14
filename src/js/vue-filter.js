/**
 * 日期格式化
 */
Vue.filter('formatDate', (timeStamp) => {
  if(timeStamp == '' || timeStamp == null || timeStamp ==0){
	  return '';
  }
  const d = new Date(+timeStamp);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();
  return `${year}年${month}月${day}日`;
});

