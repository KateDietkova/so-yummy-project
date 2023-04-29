import { scrollToElement } from 'helpers/scrollToElement';
import {
  Container,
  Page,
  StyledChevronLeft,
  StyledChevronRight,
} from './Pagination.styled';

const MAX_DISPLAYED_PAGE_NUMBERS = 5;

export const Pagination = ({
  totalPages,
  currentPage,
  onClick,
  scrollId = null,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  let firstPageIndex = currentPage > 2 ? currentPage - 2 : 1;
  let lastPageIndex = firstPageIndex + MAX_DISPLAYED_PAGE_NUMBERS - 1;
  if (lastPageIndex > totalPages) {
    lastPageIndex = totalPages;
    firstPageIndex = lastPageIndex - MAX_DISPLAYED_PAGE_NUMBERS + 1;
    if (firstPageIndex < 1) {
      firstPageIndex = 1;
    }
  }
  const displayedPageNumbers = pageNumbers.slice(
    firstPageIndex - 1,
    lastPageIndex
  );
  return (
    <Container>
      <StyledChevronLeft
        size={30}
        onClick={() => {
          if (Number(currentPage) > 1) {
            onClick(Number(currentPage) - 1);
            scrollToElement(scrollId);
          }
        }}
      />
      <StyledChevronRight
        size={30}
        onClick={() => {
          if (Number(currentPage) < totalPages) {
            onClick(Number(currentPage) + 1);
            scrollToElement(scrollId);
          }
        }}
      />
      {displayedPageNumbers.map(page => (
        <Page
          active={Number(currentPage) === page}
          key={page}
          onClick={() => {
            onClick(page);
            scrollToElement(scrollId);
          }}
        >
          {page}
        </Page>
      ))}
    </Container>
  );
};
