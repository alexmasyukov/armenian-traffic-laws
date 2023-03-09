import styled from 'styled-components';

export const Arrow = styled.div`
  visibility: hidden;
  background: ${(props) => props.theme.colors.tooltip};

  &::before {
    position: absolute;
    width: 8px;
    height: 8px;
    background: inherit;
    visibility: visible;
    content: '';
    transform: rotate(45deg);
  }
`;

export const Tooltip = styled.div`
  position: absolute;
  background: ${(props) => props.theme.colors.tooltip};
  color: ${(props) => props.theme.colors.tooltipText};
  padding: 10px 10px;
  font-size: 13px;
  border-radius: 4px;
  z-index: 1000;
  max-width: 400px;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3);

  display: flex;
  flex-direction: column;

  &[data-popper-placement^='top'] > ${Arrow} {
    bottom: 4px;
  }

  &[data-popper-placement^='bottom'] > ${Arrow} {
    top: -4px;
  }

  &[data-popper-placement^='left'] > ${Arrow} {
    right: -4px;
  }

  &[data-popper-placement^='right'] > ${Arrow} {
    left: -4px;
  }
`;

export const Img = styled.img<{ size?: 'small' }>`
  height: ${({ size }) => (size === 'small' ? '65px' : '80px')};
  width: auto;
  position: relative;
  vertical-align: middle;
  padding: 3px;
`;

export const ImgGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ImgWrapper = styled.div`
  p {
    text-align: center;
  }
`;

export const Sign = styled.div`
  display: flex;

  b {
    display: block;
    margin-bottom: 6px;
  }

  p {
    flex: 1;
  }
`;

export const Group = styled.div`
  opacity: 0.7;
  margin-top: 5px;
  padding-top: 5px;
  border-top: 1px solid #555;

  b {
    display: block;
    margin-bottom: 6px;
  }
`;
