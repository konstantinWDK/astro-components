// src/components/lib/templates/saas-clinic/index.ts
// Medical consultations SaaS template ("Pulso · Clinic OS"): marketing landing, sign-in, the
// clinic's public booking page and a complete practice app (dashboard, schedule, patients, patient
// record, consultation with SOAP note and e-prescription, video visits, reports, settings).
//
//   import { ClinicDashboardPage } from 'astro-component-kit/templates/saas-clinic';
//   <ClinicDashboardPage theme="auto" />

export { default as ClinicLayout } from './ClinicLayout.astro';
export { default as ClinicSiteLayout } from './ClinicSiteLayout.astro';
export { default as ClinicLandingPage } from './ClinicLandingPage.astro';
export { default as ClinicSignInPage } from './ClinicSignInPage.astro';
export { default as ClinicBookingPage } from './ClinicBookingPage.astro';
export { default as ClinicDashboardPage } from './ClinicDashboardPage.astro';
export { default as ClinicSchedulePage } from './ClinicSchedulePage.astro';
export { default as ClinicPatientsPage } from './ClinicPatientsPage.astro';
export { default as ClinicPatientPage } from './ClinicPatientPage.astro';
export { default as ClinicConsultationPage } from './ClinicConsultationPage.astro';
export { default as ClinicTelehealthPage } from './ClinicTelehealthPage.astro';
export { default as ClinicReportsPage } from './ClinicReportsPage.astro';
export { default as ClinicSettingsPage } from './ClinicSettingsPage.astro';

export {
  clinicData, clinicRoutes, clinicPatient, clinicDoctor, patientHref, minutesBetween, todaysAppointments, patientVitals, patientVisits,
} from './data';
export type { ClinicData, ClinicRoutes, ClinicDoctor, ClinicPatient, ClinicAppointment, ClinicSpecialty, VisitType, ApptStatus } from './data';
