import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import * as System from '../../design-system'
import InnerScroll from '../components/InnerScroll'
import AnimComp from '../components/AnimComp'
import AnimComp2 from '../components/AnimComp2'

const IndexPage = () => {
  console.log('IndexPage!')
  return (
    <Layout>
      <SEO title="Home" />
      <System.Text type="Heading-1" />
      <br />
      <System.Button />

      <InnerScroll />
      <AnimComp />
      <AnimComp2 />
    </Layout>
  )
}

export default IndexPage
