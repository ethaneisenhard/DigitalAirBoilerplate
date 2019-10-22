import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import "../scss/pages/product.scss"

const Product = () => (
  <Layout>
    <SEO title="Product" />
    <main class = "product">
        <section className = "hero">
          <div className = "contain">
            <h1>Product</h1>
            <p>Here is what we build.</p>
            <p>Lets build something great.</p>
          </div>
        </section>
        <section className = "product">
          <div className = "contain">
              <h1>More about our product.</h1>
          </div>
        </section>
    </main>
    <div>
      {/* <Image /> */}
    </div>
    
  </Layout>
)

export default Product
