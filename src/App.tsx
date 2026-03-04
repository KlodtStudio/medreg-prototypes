import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicesIndex from "./pages/ServicesIndex";
import ServiceCategory from "./pages/ServiceCategory";
import ServicePage from "./pages/ServicePage";
import PricesPage from "./pages/PricesPage";
import FAQPage from "./pages/FAQPage";
import ReviewsPage from "./pages/ReviewsPage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import BlogPage from "./pages/BlogPage";
import ArticlePage from "./pages/ArticlePage";
import SearchPage from "./pages/SearchPage";
import { PrivacyPolicy, UserAgreement, PersonalDataConsent, Offer } from "./pages/LegalPages";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/uslugi/" element={<ServicesIndex />} />
          <Route path="/uslugi/:category/" element={<ServiceCategory />} />
          <Route path="/uslugi/:category/:service/" element={<ServicePage />} />
          <Route path="/ceny/" element={<PricesPage />} />
          <Route path="/faq/" element={<FAQPage />} />
          <Route path="/otzyvy/" element={<ReviewsPage />} />
          <Route path="/about/" element={<AboutPage />} />
          <Route path="/contacts/" element={<ContactsPage />} />
          <Route path="/blog/" element={<BlogPage />} />
          <Route path="/blog/kak-opredelit-klass-riska/" element={<ArticlePage />} />
          <Route path="/search/" element={<SearchPage />} />
          <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
          <Route path="/user-agreement/" element={<UserAgreement />} />
          <Route path="/personal-data-consent/" element={<PersonalDataConsent />} />
          <Route path="/offer/" element={<Offer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
