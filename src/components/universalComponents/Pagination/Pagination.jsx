import {
  Container,
  Page,
  StyledChevronLeft,
  StyledChevronRight,
} from './Pagination.styled';

const MAX_DISPLAYED_PAGE_NUMBERS = 5;

export const Pagination = ({ totalPages, currentPage, onClick }) => {
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
        onClick={() => {
          if (Number(currentPage) > 1) {
            onClick(Number(currentPage) - 1);
          }
        }}
      />
      {displayedPageNumbers.map(page => (
        <Page
          active={Number(currentPage) === page}
          key={page}
          onClick={() => onClick(page)}
        >
          {page}
        </Page>
      ))}
      <StyledChevronRight
        onClick={() => {
          if (Number(currentPage) < totalPages) {
            onClick(Number(currentPage) + 1);
          }
        }}
      />
    </Container>
  );
};