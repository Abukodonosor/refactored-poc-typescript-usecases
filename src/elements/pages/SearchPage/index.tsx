import { hocWrap } from '../../../utils/hocWrapper';
import { useSearchPageControllerHook } from './hooks/useSearchPageControllerHook';
import { SearchPageView } from './SearchPageView';
import { SearchPageControllerHookInputProps } from './types';

export const SearchPage: React.FC<SearchPageControllerHookInputProps> = hocWrap(
  useSearchPageControllerHook,
  SearchPageView,
);
