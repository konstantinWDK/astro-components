// src/components/lib/app/index.ts
// Barrel export for App & Dashboard components (SaaS shells, tables, boards, settings).

export { default as AppSidebar } from './AppSidebar.astro';
export { default as AppTopbar } from './AppTopbar.astro';
export { default as PageHeader } from './PageHeader.astro';
export { default as DataTable } from './DataTable.astro';
export { default as RoomRack } from './RoomRack.astro';
export { default as HousekeepingBoard } from './HousekeepingBoard.astro';
export { default as ArrivalsBoard } from './ArrivalsBoard.astro';
export { default as GuestProfileCard } from './GuestProfileCard.astro';
export { default as SettingsSection } from './SettingsSection.astro';
export { default as SwitchRow } from './SwitchRow.astro';
export { default as TeamMembers } from './TeamMembers.astro';
export { default as PlanUsageCard } from './PlanUsageCard.astro';
export { default as AuthCard } from './AuthCard.astro';
// Healthcare / clinic apps
export { default as MedAgendaTimeline } from './MedAgendaTimeline.astro';
export { default as MedWaitingRoom } from './MedWaitingRoom.astro';
export { default as MedScheduleCalendar } from './MedScheduleCalendar.astro';
export { default as MedPatientSummary } from './MedPatientSummary.astro';
export { default as MedConsultationNote } from './MedConsultationNote.astro';
export { default as MedPrescriptionPad } from './MedPrescriptionPad.astro';
export { default as MedVideoVisit } from './MedVideoVisit.astro';
export { default as MedAvailabilityEditor } from './MedAvailabilityEditor.astro';
// Dental practice apps
export { default as DentalOdontogram } from './DentalOdontogram.astro';
export { default as DentalChairTimeline } from './DentalChairTimeline.astro';
export { default as DentalTreatmentPlanBuilder } from './DentalTreatmentPlanBuilder.astro';
export { default as DentalRecallManager } from './DentalRecallManager.astro';
// Moving & logistics apps
export { default as MoveInventoryCalculator } from './MoveInventoryCalculator.astro';
export { default as FleetDispatchTimeline } from './FleetDispatchTimeline.astro';
export { default as HiringPipelineBoard } from './HiringPipelineBoard.astro';
export { default as MoveManifestCard } from './MoveManifestCard.astro';
// Food delivery & kitchen OS apps ("BiteFlow")
export { default as FoodCartDrawer } from './FoodCartDrawer.astro';
export { default as FoodOrderMap } from './FoodOrderMap.astro';
export { default as FoodKitchenBoard } from './FoodKitchenBoard.astro';
export { default as FoodMenuManager } from './FoodMenuManager.astro';
export { default as FoodRiderDispatch } from './FoodRiderDispatch.astro';
export { default as FoodOrdersTable } from './FoodOrdersTable.astro';
export { default as FoodServicePulse } from './FoodServicePulse.astro';
export { default as FoodOpsNav } from './FoodOpsNav.astro';
export { default as FoodOpsTopbar } from './FoodOpsTopbar.astro';
export { default as FoodOpsHeading } from './FoodOpsHeading.astro';
export { default as FoodCrewSignIn } from './FoodCrewSignIn.astro';
// Construction, developments & site OS apps ("Strukto")
export { default as ConstructionCostEstimator } from './ConstructionCostEstimator.astro';
export { default as ConstructionIsoUnitPicker } from './ConstructionIsoUnitPicker.astro';
export { default as ConstructionGanttBoard } from './ConstructionGanttBoard.astro';
export { default as ConstructionSitesBoard } from './ConstructionSitesBoard.astro';
export { default as ConstructionSiteLogbook } from './ConstructionSiteLogbook.astro';
export { default as ConstructionUnitsLedger } from './ConstructionUnitsLedger.astro';
export { default as ConstructionOsSidebar } from './ConstructionOsSidebar.astro';
export { default as ConstructionOsTopbar } from './ConstructionOsTopbar.astro';
export { default as ConstructionOsHeading } from './ConstructionOsHeading.astro';
export { default as ConstructionSignIn } from './ConstructionSignIn.astro';
// Real estate agency & CRM apps ("Nido")
export { default as EstateMortgageCalculator } from './EstateMortgageCalculator.astro';
export { default as EstateValuationWizard } from './EstateValuationWizard.astro';
export { default as EstateVisitScheduler } from './EstateVisitScheduler.astro';
export { default as EstateLeadsPipeline } from './EstateLeadsPipeline.astro';
export { default as EstateCrmSidebar } from './EstateCrmSidebar.astro';
export { default as EstateCrmTopbar } from './EstateCrmTopbar.astro';
export { default as EstateCrmHeading } from './EstateCrmHeading.astro';
export { default as EstateListingsTable } from './EstateListingsTable.astro';
export { default as EstateAgentSignIn } from './EstateAgentSignIn.astro';
// Gym member area & staff apps ("Forja")
export { default as GymClassBooking } from './GymClassBooking.astro';
export { default as GymProgressTracker } from './GymProgressTracker.astro';
export { default as GymOccupancyMeter } from './GymOccupancyMeter.astro';
export { default as GymAreaNav } from './GymAreaNav.astro';
export { default as GymAreaTopbar } from './GymAreaTopbar.astro';
export { default as GymAreaHeading } from './GymAreaHeading.astro';
export { default as GymMembersTable } from './GymMembersTable.astro';
export { default as GymSignIn } from './GymSignIn.astro';

export { appIcons, appIcon, initials, hueFrom } from './app-icons';
export type { AppIcon } from './app-icons';

// Online academy learner area & instructor studio ("Lumen")
export { default as AcademyLessonPlayer } from './AcademyLessonPlayer.astro';
export { default as AcademyProgressBoard } from './AcademyProgressBoard.astro';
export { default as AcademyQuiz } from './AcademyQuiz.astro';
export { default as AcademyStudioStats } from './AcademyStudioStats.astro';
export { default as AcademyCoursesTable } from './AcademyCoursesTable.astro';
export { default as AcademyAreaNav } from './AcademyAreaNav.astro';
export { default as AcademyAreaTopbar } from './AcademyAreaTopbar.astro';
export { default as AcademyAreaHeading } from './AcademyAreaHeading.astro';
export { default as AcademySignIn } from './AcademySignIn.astro';

// Neobank account area ("Cobre")
export { default as BankBalanceCard } from './BankBalanceCard.astro';
export { default as BankCashflowChart } from './BankCashflowChart.astro';
export { default as BankSpendingBreakdown } from './BankSpendingBreakdown.astro';
export { default as BankTransactionsTable } from './BankTransactionsTable.astro';
export { default as BankCardManager } from './BankCardManager.astro';
export { default as BankTransferForm } from './BankTransferForm.astro';
export { default as BankAppNav } from './BankAppNav.astro';
export { default as BankAppTopbar } from './BankAppTopbar.astro';
export { default as BankAppHeading } from './BankAppHeading.astro';
export { default as BankSignIn } from './BankSignIn.astro';

// Law firm client portal ("Fuero")
export { default as LawCaseSummary } from './LawCaseSummary.astro';
export { default as LawCaseExplorer } from './LawCaseExplorer.astro';
export { default as LawDocumentVault } from './LawDocumentVault.astro';
export { default as LawMessageThread } from './LawMessageThread.astro';
export { default as LawAppointments } from './LawAppointments.astro';
export { default as LawInvoices } from './LawInvoices.astro';
export { default as LawPortalNav } from './LawPortalNav.astro';
export { default as LawPortalTopbar } from './LawPortalTopbar.astro';
export { default as LawPortalHeading } from './LawPortalHeading.astro';
export { default as LawSignIn } from './LawSignIn.astro';

// Winery members area ("Solera")
export { default as WineBottleLabel } from './WineBottleLabel.astro';
export { default as WineMemberSummary } from './WineMemberSummary.astro';
export { default as WineShipmentTracker } from './WineShipmentTracker.astro';
export { default as WineCellar } from './WineCellar.astro';
export { default as WineTastingNotebook } from './WineTastingNotebook.astro';
export { default as WinePlanManager } from './WinePlanManager.astro';
export { default as WineMemberNav } from './WineMemberNav.astro';
export { default as WineMemberTopbar } from './WineMemberTopbar.astro';
export { default as WineMemberHeading } from './WineMemberHeading.astro';
export { default as WineSignIn } from './WineSignIn.astro';

// Perfumery customer area ("Umbra")
export { default as PerfBottle } from './PerfBottle.astro';
export { default as PerfAccountSummary } from './PerfAccountSummary.astro';
export { default as PerfShelf } from './PerfShelf.astro';
export { default as PerfLayering } from './PerfLayering.astro';
export { default as PerfOrderTracker } from './PerfOrderTracker.astro';
export { default as PerfAccountNav } from './PerfAccountNav.astro';
export { default as PerfAccountTopbar } from './PerfAccountTopbar.astro';
export { default as PerfAccountHeading } from './PerfAccountHeading.astro';
export { default as PerfSignIn } from './PerfSignIn.astro';

// Restaurant customer area ("Lumbre")
export { default as RestPlate } from './RestPlate.astro';
export { default as RestAccountSummary } from './RestAccountSummary.astro';
export { default as RestReservations } from './RestReservations.astro';
export { default as RestPreferences } from './RestPreferences.astro';
export { default as RestGiftCards } from './RestGiftCards.astro';
export { default as RestAccountNav } from './RestAccountNav.astro';
export { default as RestAccountTopbar } from './RestAccountTopbar.astro';
export { default as RestAccountHeading } from './RestAccountHeading.astro';
export { default as RestSignIn } from './RestSignIn.astro';

// Architecture client area ("Cota")
export { default as ArchElevation } from './ArchElevation.astro';
export { default as ArchPlan } from './ArchPlan.astro';
export { default as ArchWorkSummary } from './ArchWorkSummary.astro';
export { default as ArchBudget } from './ArchBudget.astro';
export { default as ArchDecisions } from './ArchDecisions.astro';
export { default as ArchDiary } from './ArchDiary.astro';
export { default as ArchDocuments } from './ArchDocuments.astro';
export { default as ArchAccountNav } from './ArchAccountNav.astro';
export { default as ArchAccountTopbar } from './ArchAccountTopbar.astro';
export { default as ArchAccountHeading } from './ArchAccountHeading.astro';
export { default as ArchSignIn } from './ArchSignIn.astro';

// Theater customer area ("Telón")
export { default as TheaPoster } from './TheaPoster.astro';
export { default as TheaSeatMap } from './TheaSeatMap.astro';
export { default as TheaTickets } from './TheaTickets.astro';
export { default as TheaAccountSummary } from './TheaAccountSummary.astro';
export { default as TheaOrders } from './TheaOrders.astro';
export { default as TheaAccountNav } from './TheaAccountNav.astro';
export { default as TheaAccountTopbar } from './TheaAccountTopbar.astro';
export { default as TheaAccountHeading } from './TheaAccountHeading.astro';
export { default as TheaSignIn } from './TheaSignIn.astro';
