export const addPrefix = (obj, prefix) => {
  const result = {};

  const prefixDot = prefix ? `.${prefix}` : '';
  const prefixAmpDot = prefix ? `&.${prefix}` : '';

  const getPrefixedKey = (key) => {
    if (!prefix) return key;

    if (key.startsWith('.')) {
      return `${prefixDot}${key.slice(1)}`;
    }
    if (key.startsWith('&.')) {
      return `${prefixAmpDot}${key.slice(2)}`;
    }
    if (key.includes(' ')) {
      return key.split(' ').map(part => {
        if (part.startsWith('.')) {
          return `${prefixDot}${part.slice(1)}`;
        }
        if (part.startsWith('&.')) {
          return `${prefixAmpDot}${part.slice(2)}`;
        }
        return part;
      }).join(' ');
    }
    if (key.includes(':')) {
      return key.split(':').map((part, index) => {
        if (index === 0 && part.startsWith('.')) {
          return `${prefixDot}${part.slice(1)}`;
        }
        if (part.includes('(')) {
          return part.replace(/\(([^)]+)\)/, (match, inner) => `(${inner.split(',').map(sel => sel.trim().startsWith('.') ? `${prefixDot}${sel.trim().slice(1)}` : sel.trim()).join(', ')})`);
        }
        return part;
      }).join(':');
    }
    if (key.startsWith('@') || key.startsWith('[')) {
      return key;
    }
    return key;
  };

  for (const [key, value] of Object.entries(obj)) {
    const newKey = getPrefixedKey(key);

    if (Array.isArray(value)) {
      result[newKey] = value.map(item => {
        if (typeof item === 'string' && item.startsWith('.')) {
          return !prefix ? item : `${prefixDot}${item.slice(1)}`;
        }
        return item;
      });
    } else if (typeof value === 'object' && value !== null) {
      result[newKey] = addPrefix(value, prefix);
    } else {
      result[newKey] = value;
    }
  }

  return result;
};
