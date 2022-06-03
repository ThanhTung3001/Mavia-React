import { Grid,Box,Tab} from '@mui/material'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React, { useState } from 'react'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


const commonStyles = {
    bgcolor: 'background.paper',
    m: 1,
    border: 1
  };
const data = [
    {
      "name": "1",
  
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "2",
  
      "pv": 3500,
      "amt": 2210
    },
    {
      "name": "3",
  
      "pv": 3000,
      "amt": 2290
    },
    {
      "name": "4",
  
      "pv": 8000,
      "amt": 2000
    }
  ]
const ChartItems = () => {
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    const [value,setValue] =useState('1');
  return (
      <Grid container>
           <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab   label="Overview" value="1" />
                <Tab  label="Tropss" value="2" />
                <Tab  label="Buildings" value="3" />
                <Tab  label="Battles" value="4" />
                <Tab  label="Ownership" value="5" />
              </TabList>
            </Box>
            <TabPanel value="1">
                <Grid sm={12} style={{display:'flex'}}>
                <Grid sm={6} md={4} >
                    <Box sx={{ ...commonStyles, borderColor: 'grey.300', borderRadius: 2 }}>
                      <LineChart width={280} height={180} data={data}>

                        <Line type="monotone" dataKey="pv" stroke="#96ded9" />
                      </LineChart>
                    </Box>
                  </Grid>
                  <Grid sm={6} md={4}  >
                    <Box sx={{ ...commonStyles, borderColor: 'grey.300', borderRadius: 2 }}>
                      <LineChart width={280} height={180} data={data}>

                        <Line type="monotone" dataKey="pv" stroke="#f5db9e" />
                      </LineChart>
                    </Box>
                  </Grid>
                  <Grid sm={6} md={4}  >
                    <Box sx={{ ...commonStyles, borderColor: 'grey.300', borderRadius: 2 }}>
                      <LineChart width={280} height={180} data={data}>

                        <Line type="monotone" dataKey="pv" stroke="#bf93eb" />
                      </LineChart>
                    </Box>
                  </Grid>
          </Grid>
                
            </TabPanel>
            <TabPanel value="4">Item 4</TabPanel>
             <TabPanel value='3'>Item 3</TabPanel>
            <TabPanel value="2">Item 2</TabPanel>
            </TabContext>
            </Box>
      </Grid>
  )
}

export default ChartItems