function minMaxModulous(value, max, min) {
  return (((value - min) % (max - min + 1)) % (max - min + 1)) + min;
}

export { minMaxModulous };
