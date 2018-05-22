import React from 'react'

const ContainerFluid = ({ children }) => <div className='container-fluid'>{children} </div>
const Row = ({ children }) => <div className='row'> {children} </div>
const Pill = () => (
  <div>
    <h2 className='page-header'>Pill</h2>
    <scb-badge>New</scb-badge>
    <scb-badge pill>New pill</scb-badge>
    <scb-badge type='success' pill>
      Success pill
    </scb-badge>
  </div>
)
export default () => (
  <div>
    <ContainerFluid>
      <cwc-styles />

      <Row>
        <div className='col-lg-12 mb-4'>
          <Pill />
        </div>
      </Row>
    </ContainerFluid>
  </div>
)
