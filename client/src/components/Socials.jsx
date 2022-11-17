import React from 'react'
import styled from 'styled-components'

const Socials = ({link, code}) => {
  console.log('link:', link);
  console.log('code:', code);

  const codeLink = 'http://localhost:1111/download';

  let linkInfo = [
    {
      outlet: 'SMS',
      /* href: `sms:?body=Click%20Here%20to%20download%20a%20file.%20${encodeURI(link)}%20Or%20insert%20the%20ID%3A%20${encodeURI(code)}%20at%20${encodeURI(codeLink)}`, */
      background: '#7bcb20',
      label: '',
      icon: <i className="fa-solid fa-paper-plane"></i>
    },
    {
      outlet: 'Email',
      href: `mailto:?subject=Quicksend%20sent%20you%20a%20file%21&body=Click%20Here%20to%20download%20a%20file.%20${encodeURI(link)}%20Or%20insert%20the%20ID%3A%20${encodeURI(code)}%20at%20${encodeURI(codeLink)}`,
      background: '#dd4b39',
      label: '',
      icon: <i className="fa-solid fa-envelope"></i>
    },
    {
      outlet: 'Facebook',
      href: ``,
      background: '#3b5898',
      label: '',
      icon: <i className="fa-brands fa-square-facebook"></i>
    },
    {
      outlet: 'Twitter',
      href: ``,
      background: '#00aced',
      label: '',
      icon: <i className="fa-brands fa-twitter"></i>
    }
  ]
  const socialLinks = linkInfo.map((outlet, index) => {
    return <SocialLink
      as='a'
      target='_blank'
      rel='noreferrer'
      href={outlet.href}
      background={outlet.background}
      key={index}
    >
      {outlet.icon}
    </SocialLink>
  })
  return (
    <LinkContainer>
      {socialLinks}
    </LinkContainer>
  )
}
const LinkContainer = styled.div`
  display:flex;
  gap: 10px;
`
const SocialLink = styled.button`
  color: white;
  border-radius: 50%;
  background-color: ${props=>props.background};
  width: 50px;
  height: 50px;
  display: block;
  font-size: 1.5rem;
  display:flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  :hover {
    background-color: white;
    color: ${props=>props.background};
  }
`

export default Socials
