import DexLandingSection from '../components/Templates/DexLanding/DexLandingSection';
import DexAdvantagesSection from '../components/Templates/DexAdvantagesSection/DexAdvantagesSection';
import DexWhySoSpecialSection from '../components/Templates/DexWhySoSpecialSection/DexWhySoSpecialSection';
import DexPurposeSection from '../components/Templates/DexPurposeSection/DexPurposeSection';
import CurrentDexLimitationsSection from '../components/Templates/CurrentDexLimitationsSection/CurrentDexLimitationsSection';
import DexDownloadSection from '../components/Templates/DexDownloadSection';
import Button from '../components/Atoms/Button';
import DexPage from '../components/Pages/DexPage';
import Picture from '../components/Atoms/Picture';

export const components = {
  button: Button,
  picture: Picture,

  dexLanding: DexLandingSection,
  dexAdvantages: DexAdvantagesSection,
  dexWhySoSpecial: DexWhySoSpecialSection,
  dexPurpose: DexPurposeSection,
  dexLimitations: CurrentDexLimitationsSection,
  dexDownload: DexDownloadSection,

  DexPage,
};
