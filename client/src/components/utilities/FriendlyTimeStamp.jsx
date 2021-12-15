export default function userFriendlyTimestamp(timestamp) {
  if (timestamp <= 59) {
    return timestamp <= 1 ? "1 minute ago" : `${timestamp} minutes ago`;
  } else if (timestamp >= 60 && timestamp <= 1439) {
    return Math.floor(timestamp / 60) === 1
      ? "1 hour ago"
      : `${Math.floor(timestamp / 60)} hours ago`;
  } else if (timestamp >= 1440 && timestamp <= 2879) {
    return "Yesterday";
  } else if (timestamp >= 2880 && timestamp <= 10079) {
    return "This week";
  } else if (timestamp >= 10080 && timestamp <= 44640) {
    return "This month";
  } else if (timestamp >= 44641 && timestamp <= 525599) {
    return "This year";
  } else if (timestamp >= 525600) {
    return "Over a year ago";
  }
}
