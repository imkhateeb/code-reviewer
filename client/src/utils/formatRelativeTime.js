function formatRelativeTime(isoTime) {
  const inputDate = new Date(isoTime);
  const now = new Date();
  const diffInSeconds = Math.floor((now - inputDate) / 1000);

  if (diffInSeconds < 60) {
    return diffInSeconds === 1
      ? "Updated 1 second ago"
      : `Updated ${diffInSeconds} seconds ago`;
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return diffInMinutes === 1
      ? "Updated 1 minute ago"
      : `Updated ${diffInMinutes} minutes ago`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return diffInHours === 1
      ? "Updated 1 hour ago"
      : `Updated ${diffInHours} hours ago`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    return diffInDays === 1
      ? "Updated 1 day ago"
      : `Updated ${diffInDays} days ago`;
  }

  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInWeeks < 4) {
    return diffInWeeks === 1
      ? "Updated 1 week ago"
      : `Updated ${diffInWeeks} weeks ago`;
  }

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return diffInMonths === 1
      ? "Updated 1 month ago"
      : `Updated ${diffInMonths} months ago`;
  }

  const diffInYears = Math.floor(diffInMonths / 12);
  return diffInYears === 1
    ? "Updated 1 year ago"
    : `Updated ${diffInYears} years ago`;
}

export default formatRelativeTime;
