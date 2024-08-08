import { useEffect, useRef, useState } from 'react';
import styles from '../styles';

export default function FilterDropdownButton() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const categories = ['끝말잇기', '앞말잇기', '단어대결', '쿵쿵따'];
  const [categoryFilter, setCategoryFilter] = useState('끝말잇기');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleCategorySelect = (category: string) => {
    setCategoryFilter(category);
    setDropdownVisible(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <styles.StyleFilterButton onClick={handleButtonClick}>
        {categoryFilter} ▼
      </styles.StyleFilterButton>
      {dropdownVisible && (
        <styles.StyleDropdown>
          {categories.map((category) => (
            <li key={category}>
              <styles.StyleFilterButton
                onClick={() => handleCategorySelect(category)}
              >
                {category}
              </styles.StyleFilterButton>
            </li>
          ))}
        </styles.StyleDropdown>
      )}
    </div>
  );
}
