import { formatDistanceToNowStrict } from "date-fns";

export function relativeDate(from) {
  return formatDistanceToNowStrict(from, { addSuffix: true });
}
