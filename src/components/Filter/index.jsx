import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import './styles.scss';

import { filterState } from '../../store/atoms';
import { lengthActiveTodoState } from '../../store/selectors';

function Filter() {
  const [filter, setFilterState] = useRecoilState(filterState);
  const lengthActive = useRecoilValue(lengthActiveTodoState);

  return (
    <div className="filter-container">
      <ul>
        <li>
          <button
            type="button"
            className={filter === 'ALL' && 'filter-selected'}
            onClick={() => setFilterState('ALL')}
          >
            All
          </button>
        </li>
        <li>
          <button
            type="button"
            className={filter === 'ACTIVE' && 'filter-selected'}
            onClick={() => setFilterState('ACTIVE')}
          >
            Active
          </button>
        </li>
        <li>
          <button
            type="button"
            className={filter === 'COMPLETED' && 'filter-selected'}
            onClick={() => setFilterState('COMPLETED')}
          >
            Completed
          </button>
        </li>
      </ul>

      {lengthActive > 0 && (
        <div>{lengthActive} item{lengthActive > 1 && 's'} left</div>
      )}
    </div>
  );
}

export default Filter;
