import styled from 'styled-components';

export const HeaderArea = styled.header`
  background-color: #fff;
  height: 60px;
  border-bottom: 1px solid #ccc;

  .container {
    max-width: 1000px;
    margin: auto;
    display: flex;
  }

  a {
    text-decoration: none;
  }

  .logo {
    flex:1;
    display: flex;
    align-items: center;
    font-size: 27px;
    font-weight: bold;
    height: 60px;

    .logo1 { 
      color: #FF0000; 
    }
    .logo2 { 
      color: #00FF00; 
    }
    .logo3 { 
      color: #0000FF; 
    }
  }

  .navigation {
    padding: 10px 0;
  }

  .links,
  .link {
    margin:0;
    padding:0;
    list-style:none;
  }

  .links {
    display: flex;
    align-items: center;
    height: 40px;
  }

  .link {
    margin-left: 30px;

    a,
    button {
      border:0;
      background: none;
      cursor: pointer;
      outline: 0;
      color: #000;
      font-size: 14px;
      transition: 0.2s ease-in-out;

      &:hover {
        color: #999;;
      }
    }

    &--button {
      background: #ff8100;
      border-radius: 4px;
      padding: 5px 10px;
      cursor: pointer;
      transition: 0.2s ease-in-out;

      a {
        color: #fff;

        &:hover {
          color: #fff;;
        }
      }

      &:hover {
        background: #e57706;
      }
    }

    
  }
`;