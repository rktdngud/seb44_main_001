import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export default function Footer() {
  const githubUrl = 'https://github.com/';
  return (
    <Wapper>
      <Content>
        Copyright 2023. [ FE <Link to={`${githubUrl}jinsoul75`} target="_blank">김진솔</Link>{' '}
        <Link to={`${githubUrl}Mooobi`} target="_blank">박무생</Link>{' '}
        <Link to={`${githubUrl}shyesoo`} target="_blank">송혜수</Link> / BE{' '}
        <Link to={`${githubUrl}Yooney1`} target="_blank">김윤</Link>{' '}
        <Link to={`${githubUrl}rktdngud`} target="_blank">최우형</Link>{' '}
        <Link to={`${githubUrl}myoungincho729`} target="_blank">조명인</Link> ]. All rights reserved.
      </Content>
    </Wapper>
  );
}

const Wapper = styled.footer`
  background-color: var(--color-white);
  display: flex;
  justify-content: center;
  left: 0;
  bottom: 0;
  width: 100%;
  position:absolute;
`;

const Content = styled.div`
  padding: 1rem;
  >a{
    color:var(--color-black);
  }
`;