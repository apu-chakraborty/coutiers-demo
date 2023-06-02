import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import ProfessionalProfileBody from "@/components/feature/professional-profile";
import React from "react";


class ProfessionalProfile extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ProfessionalProfileBody />
        <Footer />
      </div>
    );
  }
}
export default ProfessionalProfile;