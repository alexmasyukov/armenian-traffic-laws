import styled from 'styled-components';

export const StyledRulesLayout = styled.div`
  font-size: ${(props) => props.theme.fontSize.rules};

  ul,
  ol {
    li {
      &::marker {
        // inside the marker position
        list-style-position: inside;
      }
    }
  }
`;
