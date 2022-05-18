query Header {
  header {
    data {
      attributes {
        title
        about
        shop
        gallery
        contact
        shopcart
      }
    }
  }
}

///



///

query About {
  about {
    data {
      attributes {
        descriptionFR
        descriptionEN
        copyright
        visual {
          data {
            attributes {
              formats
            }
          }
        }
      }
    }
  }
}

