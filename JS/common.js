/**
 * 
 * @param {要排序的版本函数} arr 
 */
function versionSort(arr){
  arr.sort((a, b) => {
    let i = 0;
    const arr1 = a.split('.');
    const arr2 = b.split('.');
    while (true) {
      const s1 = arr1[i];
      const s2 = arr2[i++];
      if (s1 === s2) continue;
      // 降序,增序为s1-s2
      return s2 - s1;
    }
  });
}
let arr = ['0.5.1', '0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']
versionSort(arr)
console.log(versionSort(arr));
