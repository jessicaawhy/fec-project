import styled from 'styled-components';

/*
  reference: https://css-tricks.com/five-methods-for-five-star-ratings/#method-5-using-unicode-symbols
  to use: <Stars rating={rating} />
*/

const Stars = styled.div`
  --star-size: 20px;
  --star-color: rgb(225, 225, 225); // before
  --star-background: rgb(100, 100, 100); // fill color
  --percent: calc(${(props) => props.rating} / 5 * 100%);

  display: inline-block;
  font-size: var(--star-size);
  font-family: Times; // make sure ★ appears correctly
  line-height: 1;

  &::before {
    content: '★★★★★';
    letter-spacing: 3px;
    background: linear-gradient(90deg, var(--star-background) var(--percent), var(--star-color) var(--percent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default Stars;
