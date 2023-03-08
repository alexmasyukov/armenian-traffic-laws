import styled from 'styled-components';

export const Tooltip = styled.div`
  position: absolute;
  display: inline-block;
  background: ${(props) => props.theme.colors.tooltip};
  color: ${(props) => props.theme.colors.tooltipText};
  font-weight: bold;
  padding: 5px 10px;
  font-size: 13px;
  border-radius: 4px;
  z-index: 1000;
  max-width: 400px;
  /* box-shadow: 0 0 5px rgba(0, 0, 0, 0.5); */

  /* #arrow,
  #arrow::before {
    position: absolute;
    width: 8px;
    height: 8px;
    background: inherit;
  }

  #arrow {
    visibility: hidden;
  }

  #arrow::before {
    visibility: visible;
    content: '';
    transform: rotate(45deg);
  } */

  /* #tooltip[data-popper-placement^='top'] > #arrow {
    bottom: -4px;
  }

  #tooltip[data-popper-placement^='bottom'] > #arrow {
    top: -4px;
  }

  #tooltip[data-popper-placement^='left'] > #arrow {
    right: -4px;
  }

  #tooltip[data-popper-placement^='right'] > #arrow {
    left: -4px;
  } */
`;
