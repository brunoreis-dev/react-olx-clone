import styled from 'styled-components'

export const PageArea = styled.div `
  
  form {
    background-color: #fff;
    border-radius: 3px;
    padding: 10px;
    box-shadow: 0px 0px 3px #999;
  }

  .area {
    display: flex;
    align-items: center; 
    padding: 10px;
    max-width: 500px;

    &--title {
      width: 200px;
      text-align: right;
      padding-right: 20px;
      font-weight: bold;
      font-size: 14px;
    }

    &--input {
      flex: 1;

      input {
        width: 100%;
        font-size: 14px;
        padding: 5px;
        border: 1px solid #DDD;
        border-radius: 3px;
        outline: 0;
        transition: 0.4s ease-in-out;

        &[type="checkbox"] {
          width: auto;
        }

        &:focus {
          border: 1px solid #333;
          color: #333;
        }
      }
    }

    button {
      background-color: #0089ff;
      border: 0;
      outline: 0;
      padding:5px 10px;
      cursor: pointer;
      color: #fff;
      font-size: 15px;
      border-radius: 4px;
      transition: 0.2s ease-in-out;

      &:hover {
        background-color: #006fce;
      }
    }
  }
`