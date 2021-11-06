import styled from 'styled-components';

export const StyledRecommend = styled.fieldset`
  border: none;
  margin: 10px 0;

  legend {
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  };

  div label {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  };

  input, label {
    vertical-align: baseline;
    padding: 10px;
    margin: 0 10px;
  }
`;

export const StyledName = styled.fieldset`
  border: none;
  margin: 10px 0;

  label {
    font-weight: bold;
  }

  label {
    display: flex;
    flex-direction: column;
    margin: 5px;
  };

  input {
    margin: 5px 0;
    padding: 3px;
  };
`;

export const StyledEmail = styled.fieldset`
  border: none;
  margin: 10px 0;

  label {
    font-weight: bold;
  }

  label {
    display: flex;
    flex-direction: column;
    margin: 5px;
  };

  input {
    margin: 5px 0;
    padding: 3px;
  };
`;

export const StyledCharacteristics = styled.fieldset`
  border: none;
  margin: 10px 0;

  legend {
    font-weight: bold;
  }

  div {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
  };

  div label {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-basis: 100%;
    text-align: center;
    align-items: center;
    margin: 10px;
  };

  input {
    margin: 10px;
  }
`;
