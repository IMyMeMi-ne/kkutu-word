import styles from './styles';
import FilterDropdownButton from './_component/FilterDropdownButton';
import SearchInput from './_component/SearchInput';

export default function Header() {
  return (
    <styles.StyleContainer>
      <styles.StyleHeadContainer>
        <FilterDropdownButton />
        <styles.StyleKkutuButton
          href="https://kkutu.co.kr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          끄투 바로가기
        </styles.StyleKkutuButton>
        <SearchInput />
      </styles.StyleHeadContainer>
      <styles.StyleHr />
    </styles.StyleContainer>
  );
}
