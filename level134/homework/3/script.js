function removeFalsyDeep(obj) {
  if (obj == null || typeof obj !== 'object') return {};

  const result = Array.isArray(obj) ? [] : {};

  for (const [key, value] of Object.entries(obj)) {
    if (value && typeof value === 'object') {
      const cleaned = removeFalsyDeep(value);
      const isEmpty =
        (Array.isArray(cleaned) && cleaned.length === 0) ||
        (!Array.isArray(cleaned) && Object.keys(cleaned).length === 0);

      if (!isEmpty) {
        result[key] = cleaned;
      }
    } else if (Boolean(value)) {
      result[key] = value;
    }
  }

  return result;
}
