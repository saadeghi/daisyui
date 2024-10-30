export const addPrefix = (obj, prefix) => {
  const result = {};

  const getPrefixedKey = (key) => {
    if (!prefix) {
      return key;
    }

    // class selectors like ".btn"
    if (key.startsWith('.')) {
      return `.${prefix}${key.slice(1)}`;
    }
    // nested class selectors like "&.btn"
    if (key.startsWith('&.')) {
      return `&.${prefix}${key.slice(2)}`;
    }
    if (key.includes(' ')) {
      // compound selectors like ".btn .icon"
      return key.split(' ').map(part => part.startsWith('.') ? `.${prefix}${part.slice(1)}` : part).join(' ');
    }
    if (key.includes(':')) {
      // pseudo-classes like ":hover" and complex selectors like ":is(.btn)"
      return key.split(':').map((part, index) => {
        if (index === 0 && part.startsWith('.')) {
          return `.${prefix}${part.slice(1)}`;
        }
        if (part.includes('(')) {
          // Handle nested selectors within pseudo-classes like :is(.btn)
          return part.replace(/\(([^)]+)\)/, (match, inner) => `(${inner.split(',').map(sel => sel.trim().startsWith('.') ? `.${prefix}${sel.trim().slice(1)}` : sel.trim()).join(', ')})`);
        }
        return part;
      }).join(':');
    }
    if (key.startsWith('@media') || key.startsWith('@keyframes') || key.startsWith('@layer') || key.startsWith('@supports') || key.startsWith('@container') || key.startsWith('[')) {
      // media queries, keyframes, layers, supports, container queries, and attribute selectors
      return key;
    }
    return key;
  };

  for (const [key, value] of Object.entries(obj)) {
    const newKey = getPrefixedKey(key);

    if (Array.isArray(value)) {
      // arrays within the CSS object
      result[newKey] = value.map(item => {
        if (typeof item === 'string' && item.startsWith('.')) {
          return !prefix ? item : `.${prefix}${item.slice(1)}`;
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
