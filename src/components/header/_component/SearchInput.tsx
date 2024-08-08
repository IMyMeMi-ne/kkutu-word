import { useState } from 'react';
import styles from '../styles';

export default function SearchInput() {
  const [isSearchInputClick, setIsSearchInputClick] = useState(false);
  const [isMissionInputClick, setIsMissionIsInputClick] = useState(false);
  return (
    <styles.StyleSearchInputContainer>
      <styles.StyleSearchInput
        type="text"
        placeholder={isMissionInputClick === true ? '' : '미션 글자'}
        onFocus={() => setIsMissionIsInputClick(true)}
        onBlur={() => {
          setIsMissionIsInputClick(false);
        }}
      />
      <styles.StyleSearchInput
        type="text"
        placeholder={isSearchInputClick === true ? '' : '검색 단어'}
        onFocus={() => setIsSearchInputClick(true)}
        onBlur={() => {
          setIsSearchInputClick(false);
        }}
      />
    </styles.StyleSearchInputContainer>
  );
}
