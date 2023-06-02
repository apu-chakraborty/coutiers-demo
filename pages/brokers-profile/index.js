import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import BrokersProfileBody from "@/components/feature/brokers-profile";
import React from "react";

class BrokersProfile extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <BrokersProfileBody />
        <Footer />
      </div>
    );
  }
}
export default BrokersProfile;