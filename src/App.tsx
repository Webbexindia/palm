
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './features/home/HomePage';
import { RussetVillaPage } from './features/villas/RussetVillaPage';
import { BlickVillaPage } from './features/villas/BlickVillaPage';
import { KadanVillaPage } from './features/villas/KadanVillaPage';
import { ToskaVillaPage } from './features/villas/ToskaVillaPage';
import { ContactPage } from './features/contact/ContactPage';
import { ScrollToTopOnMount } from './components/ui/ScrollToTopOnMount';

import SixBhkVillaForRent from "./pages/seo/SixBhkVillaForRent";
import SixBhkVillaWithPrivatePool from './pages/seo/SixBhkPrivatePool';
import FourBhkLuxuryVillaLonavala from './pages/seo/FourBhkLuxuryVilla';
import EightBhkVillaLonavala from './pages/seo/EightBhkVilla';
import LargeVillasForRentInLonavala from './pages/seo/LargeVillas';
import VillaForBigGroupInLonavala from './pages/seo/BigGroupVilla';
import LuxuryVillaForFamilyReunionLonavala from './pages/seo/FamilyReunionVilla';
import CorporateRetreatVillaLonavala from './pages/seo/CorporateRetreatVilla';
import PrivateVillaFor15PlusGuestsLonavala from './pages/seo/PrivateVilla15Guests';
import VillaForPreWeddingPartyLonavala from './pages/seo/PreWeddingPartyVilla';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTopOnMount />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/villas/russet" element={<RussetVillaPage />} />
        <Route path="/villas/blick" element={<BlickVillaPage />} />
        <Route path="/villas/kadan" element={<KadanVillaPage />} />
        <Route path="/villas/toska" element={<ToskaVillaPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/6bhk-villa-for-rent-in-lonavala" element={<SixBhkVillaForRent />} />
        <Route path="/6bhk-villa-in-lonavala-with-private-pool" element={<SixBhkVillaWithPrivatePool />} />
        <Route path="/4BHK-luxury-villa-Lonavala" element={<FourBhkLuxuryVillaLonavala />} />
        <Route path="/8-bhk-villa-in-lonavala" element={<EightBhkVillaLonavala />} />
        <Route path="/large-villas-for-rent-in-lonavala" element={<LargeVillasForRentInLonavala />} />
        <Route path="/villa-for-big-group-in-lonavala" element={<VillaForBigGroupInLonavala />} />
        <Route path="/luxury-villa-for-family-reunion-lonavala" element={<LuxuryVillaForFamilyReunionLonavala />} />
        <Route path="/corporate-retreat-villa-lonavala" element={<CorporateRetreatVillaLonavala />} />
        <Route path="/private-villa-for-15-plus-guests-lonavala" element={<PrivateVillaFor15PlusGuestsLonavala />} />
        <Route path="/villa-for-pre-wedding-party-lonavala" element={<VillaForPreWeddingPartyLonavala />} />
      </Routes>
    </BrowserRouter>
  );
}
