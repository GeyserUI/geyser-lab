import useDebounceExample from "./useDebounce/example";
import { useDebounceMetadata } from "./useDebounce/metadata";
import useDebounce from "./useDebounce/useDebounce";

export const hooks = [
  {
    hook: useDebounce,
    Example: useDebounceExample,
    ...useDebounceMetadata,
  },
];
