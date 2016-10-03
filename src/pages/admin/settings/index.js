import React from 'react'
import SourceProviders from './sourceProviders'
import HardwareProviders from './hardwareProviders'
import { Grid, Row, Col } from 'react-flexbox-grid'

export const Settings = () => (
  <Grid>
    <Row>
      <Col xs={0} sm={0} md={4} lg={2}/>
      <Col xs={12} sm={12} md={8} lg={10}>
        <SourceProviders/>
        <HardwareProviders/>
      </Col>
    </Row>
  </Grid>
)

export default Settings
