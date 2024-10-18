import { FC } from "react";
import { FilterButton, StyleFooter } from "./style";
import { clearCompleted, useDispatch } from "shared";
import { TFilter } from "../../view";

interface IFooterProps {
  count: number;
  active: string;
  filter: TFilter;
}

export const Footer: FC<IFooterProps> = ({ count, active,  filter }) => {
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearCompleted());
  }

  return (
    <StyleFooter>
      <span>{count} items left!</span>
      <ul>
        <li>
          <FilterButton onClick={() => filter('all')} active={active === 'all' ? 1 : 0} href="#">
            All
          </FilterButton>
        </li>
        <li>
          <FilterButton onClick={() => filter('active')} active={active === 'active' ? 1 : 0} href="#">
            Active
          </FilterButton>
        </li>
        <li>
          <FilterButton onClick={() => filter('completed')} active={active === 'completed' ? 1 : 0} href="#">
            Completed
          </FilterButton>
        </li>
      </ul>
      <button onClick={handleClear}>Clear completed</button>
    </StyleFooter>
  );
};
