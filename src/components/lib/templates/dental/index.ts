// src/components/lib/templates/dental/index.ts
// Dental Clinic & Practice Management SaaS template ("Dentis"): public marketing site, treatments,
// patient appointment booking wizard, and practice backoffice app (dashboard, operatory chairs schedule,
// patients with interactive 32-tooth odontogram, treatment plan quotes, hygiene recalls, and settings).
//
//   import { DentalHomePage, DentalDashboardPage } from 'astro-component-kit/templates/dental';
//   <DentalDashboardPage theme="auto" />

export { default as DentalSiteLayout } from './DentalSiteLayout.astro';
export { default as DentalLayout } from './DentalLayout.astro';
export { default as DentalHomePage } from './DentalHomePage.astro';
export { default as DentalTreatmentsPage } from './DentalTreatmentsPage.astro';
export { default as DentalBookingPage } from './DentalBookingPage.astro';
export { default as DentalSignInPage } from './DentalSignInPage.astro';
export { default as DentalDashboardPage } from './DentalDashboardPage.astro';
export { default as DentalSchedulePage } from './DentalSchedulePage.astro';
export { default as DentalPatientsPage } from './DentalPatientsPage.astro';
export { default as DentalPatientPage } from './DentalPatientPage.astro';
export { default as DentalTreatmentPlansPage } from './DentalTreatmentPlansPage.astro';
export { default as DentalRecallsPage } from './DentalRecallsPage.astro';
export { default as DentalSettingsPage } from './DentalSettingsPage.astro';

export {
  dentalData,
  dentalRoutes,
  dentalDoctors,
  dentalChairs,
  dentalTreatments,
  dentalPatients,
  dentalAppointments,
  dentalRecalls,
} from './data';

export type {
  DentalClinicData,
  DentalRoutes,
  DentalDoctor,
  DentalChair,
  DentalTreatment,
  DentalPatient,
  DentalAppointment,
  DentalRecallItem,
  ToothCondition,
  ToothStatus,
  ChairStatus,
  ChairType,
  TreatmentCategory,
} from './data';

