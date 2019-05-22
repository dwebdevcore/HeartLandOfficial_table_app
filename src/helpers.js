export function formatPrice(cents) {
  return (cents / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getDateStamp() {
  return Date.now;
}

export const copy = obj => JSON.parse(JSON.stringify(obj));

export function tokenizeURLParameters(url) {
  const result = {};
  let _url = url
    .replace('/', '')
    .replace('?', '')
    .replace('%20', ' ');

  // eslint-disable-next-line
  _url.split('&').map(k => {
    let item = k.split('=');
    if (item[0] !== '') {
      result[item[0]] = item[1];
    }
  });
  return result;
}

export function serializeURLParameters(obj) {
  let str = [];
  for (let p in obj) {
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  }
  return `?${str.join('&')}`;
}

export function serializeURLParametersPlain(obj) {
  let str = [];
  for (let p in obj) {
    if (obj.hasOwnProperty(p)) {
      str.push(p + '=' + obj[p]);
    }
  }
  return `?${str.join('&')}`;
}
