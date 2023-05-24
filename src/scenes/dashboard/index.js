import React from 'react'
import Header from '../../components/Header'
import { Box } from '@mui/material'

function index() {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignContent={"center"}>
        <Header title="DASHBOARD" subtitle="Welcome To Your Dashboard"/>
      </Box>
      
    </Box>
    
  )
}

export default index