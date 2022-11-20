import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useAuth } from '../Hooks/useAuth'

const NavLink = ({ title, destination }) => {
  const { logout } = useAuth();

  return (
    <NavItem
      whileHover={{
        'boxShadow': 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
      }}
      >
        <FillLink
        to={destination}
        onClick={title === 'Logout' ? ()=>logout() : null}>
          {title}
        </FillLink>
    </NavItem>
  )
}
const NavItem = styled(motion.div)`
  /* margin: 0 25px; */
  font-size: 1.3rem;
  height: 100%;
`
const FillLink = styled(Link)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  padding: 0 20px;
`
export default NavLink
