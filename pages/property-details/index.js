import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import PropertyDetailsBody from "@/components/feature/property-details";
import React from "react";

class PropertyDetails extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <PropertyDetailsBody />
        <Footer />
      </div>
    );
  }
}
export default PropertyDetails;