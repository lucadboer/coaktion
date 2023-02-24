import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    ${({ theme }) => css`
      background-color: ${theme.colors.background.white};
      color: ${theme.colors.text.gray};
    `}
  }

  body, input, textarea, button, select {
    font: 400 1rem ${({ theme }) => theme.fonts.primary};
    -webkit-font-smoothing: antialiased;

    &::-webkit-scrollbar {
      width: 10px;
      border: 1px solid black;
    }
    
    &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.brand};
  }

    &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px
  }
}

  a, button {
    cursor: pointer;
    all: unset;
  }

  input {
    border: 0;
  }

  input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
  input[type='number'] {
  -moz-appearance: textfield;
  appearance: textfield;
}
`