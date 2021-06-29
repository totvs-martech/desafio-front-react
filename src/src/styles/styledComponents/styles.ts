import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
      max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`;

export const Filter = styled.div`
  width: 100%;
  max-width: 1320px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  .react-datepicker-wrapper{
    margin: 0px 5px 0 0;
  }
  .react-datepicker-wrapper:first-child{
    margin: 0 5px 0 5px;
  }
`;

export const InputGroup = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
  max-width: 620px;
  .input-group > .form-control,
  .input-group > .form-select {
    position: relative;
    flex: 1 1 auto;
    width: 1%;
    min-width: 0;
  }
  .input-group > .form-control:focus,
  .input-group > .form-select:focus {
    z-index: 3;
  }
  .input-group .btn {
    position: relative;
    z-index: 2;
  }
  .input-group .btn:focus {
    z-index: 3;
  }
`;

export const FormControl = styled.input`
  display: block;
  flex: 1;
  padding: 0.375rem 0.75rem;
  margin-right: 0.5rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    color: #212529;
    background-color: #fff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
`;

export const Button = styled.button`
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, 
  background-color 0.15s ease-in-out, 
  border-color 0.15s ease-in-out, 
  box-shadow 0.15s ease-in-out;
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
  &:hover {
  color: #fff;
  background-color: #5c636a;
  border-color: #565e64;
  }
  &:focus {
    outline: 0;
    color: #fff;
    background-color: #5c636a;
    border-color: #565e64;
  }
  &:active {
    outline: 0;
    color: #fff;
    background-color: #5c636a;
    border-color: #565e64;
    box-shadow: 0 0 0 0.25rem rgba(130, 138, 145, 0.5);
  }
  &:disabled{
    pointer-events: none;
    opacity: 0.65;
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
  }

`;