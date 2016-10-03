import React from 'react'
import SourceProviders from './sourceProviders'
import HardwareProviders from './hardwareProviders'
import { Grid, Row, Col } from 'react-flexbox-grid'

export const Settings = () => (
  <div>
    <Row>
      <Col xs={12} sm={3} md={2} lg={1} />
      <Col xs={6} sm={6} md={8} lg={10} />
      <Col xs={6} sm={3} md={2} lg={1} />
    </Row>

    <SourceProviders/>
    <HardwareProviders/>
  </div>
)

export default Settings
