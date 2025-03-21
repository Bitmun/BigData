import styles from './styles.module.scss';
import { FetchErrorProps } from './type';

import { DEFAULT_FETCH_ERROR } from 'constants/texts';

export const FetchError = ({ errorText = DEFAULT_FETCH_ERROR }: FetchErrorProps) => {
  return <div className={styles.fetchErrorWrapper}>{errorText}</div>;
};
