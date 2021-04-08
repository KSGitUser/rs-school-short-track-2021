/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let dnsObj = {};
  const dnsMap = new Map();
  let domainStr = '';
  const setDnsMap = () => {
    if (dnsMap.has(domainStr)) {
      dnsMap.set(domainStr, dnsMap.get(domainStr) + 1);
    } else {
      dnsMap.set(domainStr, 1);
    }
  };
  domains.forEach((element) => {
    const strArr = element.split('.').reverse();
    domainStr = '';
    for (let i = 0; i < strArr.length; i++) {
      domainStr = strArr[i] + (domainStr ? `.${domainStr}` : '');
      setDnsMap();
    }
  });
  [...dnsMap].forEach((item) => {
    dnsObj = { ...dnsObj, [`.${item[0].split('.').reverse().join('.')}`]: item[1] };
  });

  return dnsObj;
}

module.exports = getDNSStats;
