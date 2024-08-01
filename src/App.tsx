import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Footer from "./components/Footer";
// import ScrollButton from "./components/ScrollButton";
// import BoardOfDirectors from "./pages/BoardOfDirectors";
// import VisionMission from "./pages/VisionMission";
// import Milestones from "./pages/Milestones";
// import OurStory from "./pages/OurStory";
// import ReadMore from "./pages/ReadMore";
// import WhatWeDo from "./pages/WhatWeDo";
// import OurTeam from "./pages/OurTeam";
// import Career from "./pages/Career";
// import JobDetails from "./pages/JobDetails";
// import Announcements from "./pages/Anouncements";
// import ContactUs from "./pages/ContactUs";
// import ProjectPage from "./pages/ProjectPage";
// import { projectData } from "./utils/data/projectData";
// import LegalDisclaimer from "./pages/LegalDisclaimer";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// import RefundCancellations from "./pages/RefundCancellations";
// import Foreclosures from "./pages/Foreclosures";
// import FinancialResults from "./pages/FinancialResults";
// import CompositionCommittee from "./pages/CompositionCommittee";
// import ShareholdingPattern from "./pages/ShareholdingPattern";
// import CorporateGovernanceReport from "./pages/CorporateGovernanceReport";
// import CodeofConductPolicies from "./pages/CodeofConductPolicies";
// import MaterialityEvents from "./pages/MaterialityEvents";
// import AnnualReturn from "./pages/AnnualReturn";
// import AnnualSecretarialCompliance from "./pages/AnnualSecretarialCompliance";
// import MonitoringAgencyReport from "./pages/MonitoringAgencyReport";
// import SchemeofArrangement from "./pages/SchemeofArrangement";
// import UnclaimedDividend from "./pages/UnclaimedDividend";
// import AdvicetoShareholders from "./pages/AdviceShareholders";
// import DataRetentionPolicy from "./pages/DataRetentionPolicy";
// import KeyManagement from "./pages/KeyManagement";
// import PayEmi from "./pages/PayEmi";
// import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="*" element={<NotFound />} />
        <Route path="/about-us" element={<OurStory />} />
        <Route path="/board-of-directors" element={<BoardOfDirectors />} />
        <Route path="/mission-vision" element={<VisionMission />} />
        <Route path="/milestones" element={<Milestones />} />
        <Route path="/read-more" element={<ReadMore />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/our-teams" element={<OurTeam />} />
        <Route path="/job-openings" element={<Career />} />
        <Route path="/anouncements" element={<Announcements />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/legal-disclaimer" element={<LegalDisclaimer />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-cancellation" element={<RefundCancellations />} />
        <Route path="/foreclosure-cancellations" element={<Foreclosures />} />
        <Route
          path="/data-retention-policy"
          element={<DataRetentionPolicy />}
        />
        <Route
          path="/key-management-personnel-and-management-team"
          element={<KeyManagement />}
        />
        <Route
          path="/ashapurti-loans"
          element={<ProjectPage data={projectData[0]} />}
        />
        <Route
          path="/bade-bhaisab"
          element={<ProjectPage data={projectData[2]} />}
        />
        <Route
          path="/saral-sahayak"
          element={<ProjectPage data={projectData[1]} />}
        />
        <Route
          path="/india-fdi"
          element={<ProjectPage data={projectData[4]} />}
        />
        <Route
          path="/xoom-pay"
          element={<ProjectPage data={projectData[5]} />}
        />
        <Route
          path="/farmedinindia"
          element={<ProjectPage data={projectData[6]} />}
        />
        <Route path="/financial-results" element={<FinancialResults />} />
        <Route path="/shareholding-pattern" element={<ShareholdingPattern />} />
        <Route
          path="/code-of-conduct-policies"
          element={<CodeofConductPolicies />}
        />
        <Route
          path="/corporate-governance-report"
          element={<CorporateGovernanceReport />}
        />
        <Route
          path="/composition-of-committee"
          element={<CompositionCommittee />}
        />
        <Route path="/annual-return" element={<AnnualReturn />} />
        <Route path="/materiality-of-events" element={<MaterialityEvents />} />
        <Route
          path="/annual-secretarial-compliance-report"
          element={<AnnualSecretarialCompliance />}
        />
        <Route
          path="/"
          element={<MonitoringAgencyReport />}
        />
        <Route path="/" element={<SchemeofArrangement />} />
        <Route path="/" element={<UnclaimedDividend />} />
        <Route path="/" element={<AdvicetoShareholders />} />
        <Route path="/pay-emi" element={<PayEmi />} />
        <Route path="/job-openings/:jobId" element={<JobDetails />} /> */}
      </Routes>
      {/* <ScrollButton /> */}
       <Footer />
    </BrowserRouter>
  );
}
