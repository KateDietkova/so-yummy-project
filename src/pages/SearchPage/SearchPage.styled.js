import styled from 'styled-components';
import NoResultsImageMobile from '../../assets/images/mobile/search-page/search-not-found.png';
import NoResultsImageMobileRetina from '../../assets/images/mobile/search-page/search-not-found-2x.png';
import NoResultsImageTablet from '../../assets/images/tablet/search-page/search-not-found.png';
import NoResultsImageTabletRetina from '../../assets/images/tablet/search-page/search-not-found-2x.png';
import NoResultsImageDesktop from '../../assets/images/desktop/search-page/search-not-found.png';
import NoResultsImageDesktopRetina from '../../assets/images/desktop/search-page/search-not-found-2x.png';
import { BiChevronDown } from 'react-icons/bi';

export const Main = styled.main`
  @media screen and (max-width: 768px) {
    padding-bottom: 100px;
  }

  @media screen and (min-width: 768px) {
    padding-bottom: 200px;
  }

  @media screen and (min-width: 1280px) {
    padding-bottom: 100px;
  }
`;

export const SearchSection = styled.section`
  padding-bottom: 40px;

  @media screen and (min-width: 1280px) {
    padding-bottom: 90px;
  }
`;

export const RecipesGallerySection = styled.section`
  text-align: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 50px;
  }
`;

export const DropdownContainer = styled.div`
  text-align: center;

  @media screen and (max-width: 768px) {
    margin-top: 24px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 28px;
  }
`;

export const SearchLabel = styled.span`
  margin-right: 15px;
  font-family: PoppinsRegular;
  font-weight: 700;
  font-size: 12px;
  line-height: calc(16 / 12);
  letter-spacing: -0.24px;
  color: ${({ theme }) =>
    theme.darkTheme ? theme.colors.textWhite : '#001833'};

  @media screen and (min-width: 768px) {
    margin-right: 18px;
    font-size: 14px;
    line-height: calc(14 / 12);
    letter-spacing: -0.24px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;
    line-height: calc(24 / 18);
    letter-spacing: -0.24px;
  }
`;

export const StyledDropdown = styled.div`
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  font-family: PoppinsRegular;
  font-size: 12px;
  line-height: calc(18 / 12);
  letter-spacing: -0.02em;
  color: ${({ theme }) =>
    theme.darkTheme ? 'rgba(250, 250, 250, 0.5)' : 'rgba(0, 0, 0, 0.5)'};

  min-width: 146px;
  height: auto;
  padding: 8px 14px;
  border: none;
  outline: ${({ theme }) =>
    theme.darkTheme ? '1px solid rgba(250, 250, 250, 0.2)' : 'none'};
  background-color: ${({ theme }) =>
    theme.darkTheme ? 'transparent' : '#f3f3f3'};
  border-radius: 6px;
  cursor: default;
  user-select: none;

  @media screen and (min-width: 768px) {
    padding: 10px 133px 10px 14px;
    font-size: 14px;
    line-height: calc(21 / 14);
  }

  @media screen and (min-width: 768px) {
    padding: 14px 156px 14px 14px;
  }
`;

export const SelectedValue = styled.div`
  display: flex;
  text-transform: capitalize;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const StyledChevron = styled(BiChevronDown)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 12px;
`;

export const SearchSelect = styled.div`
  position: absolute;
  z-index: 3;
  top: 100%;
  left: 0;
  right: 0;
  border-radius: 4px;
  overflow: hidden;
  background-color: ${({ theme }) => (theme.darkTheme ? '#8BAA36' : '#fafafa')};
`;

export const Option = styled.div`
  text-align: start;
  border: none;
  outline: none;
  background-color: transparent;
  padding: 8px 0px 4px 14px;
  cursor: pointer;

  &:last-child {
    padding: 4px 0px 10px 14px;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) =>
      theme.darkTheme ? '#fafafa' : props => props.theme.colors.accent};
  }
`;

export const NoResultsWrapper = styled.div`
  display: inline-flex;
  align-items: flex-end;
  justify-content: center;

  margin-top: 10px;
  width: 300px;
  height: 175px;

  background-image: url(${NoResultsImageMobile});
  background-repeat: no-repeat;
  background-size: 208px 133px;
  background-position: top center;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    & {
      background-image: url(${NoResultsImageMobileRetina});
    }
  }

  @media screen and (min-width: 768px) {
    width: 400px;
    height: 300px;
    background-image: url(${NoResultsImageTablet});
    background-size: 350px 225px;
    margin-bottom: 0px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${NoResultsImageTabletRetina});
      }
    }
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${NoResultsImageDesktop});
    margin-bottom: 100px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${NoResultsImageDesktopRetina});
      }
    }
  }
`;

export const NoResultsText = styled.p`
  font-family: PoppinsSemiBold;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1;

  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;

  color: ${({ theme }) => (theme.darkTheme ? '#fafafa' : '#000000')};

  opacity: 0.5;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const PaginationContainer = styled.div`
  text-align: center;
  @media screen and (max-width: 768px) {
    margin-top: 8px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 18px;
  }
`;
