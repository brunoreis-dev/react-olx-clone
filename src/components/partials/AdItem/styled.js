import styled from 'styled-components'

export const Item = styled.div `

  a {
    border: 1px solid #fff;
    display: block;
    margin: 10px;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
    color: #000;
    background-color: #fff;
    transition: 0.2s ease-in-out;

    &:hover { 
      border: 1px solid #ccc;
      background-color: #eee;
    }

    .itemImage img {
      width: 100%;
      border-radius: 5px;
    }

    .itemName {
      font-weight: bold;
    }
  }
`