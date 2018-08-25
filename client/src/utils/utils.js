export const twitchHeaders = { 
  headers: { 
    'Client-ID': 'mcwz9ja0w8it67doniwikbephl8n8o',
    'Accept': 'application/vnd.twitchtv.v5+json'
  }
};

export function uniqueFrom(arr, key, side) {
  const reduceFunc = side === 'left' ? 'reduce' : 'reduceRight';

  return arr[reduceFunc]((uniques, obj) => {
    if (!uniques.some(unique => unique[key] === obj[key])) {
      uniques.unshift(obj);
    }
    return uniques;
  }, []);
};
