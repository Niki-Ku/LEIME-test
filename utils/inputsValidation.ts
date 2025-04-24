export const validateTitle = (title: string): boolean => {
  let error = false;

  if (title.length < 3 || title.length > 100) error = true;

  return error;
};

export const validateImgUrlError = (url: string): boolean => {
  try {
    const parsed = new URL(url);
    const check = parsed.protocol.startsWith("http") && /\.(jpe?g)$/i.test(url);

    return !check;
  } catch {
    return true;
  }
};

export const validateLikes = (likes: string): boolean => {
  return !(Number(likes) >= 0 && Number(likes) < 100);
};

export const validateLink = (link: string): boolean => {
  try {
    new URL(link);

    return false;
  } catch {
    return true;
  }
};
