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

export { appIcons, appIcon, initials, hueFrom } from './app-icons';
export type { AppIcon } from './app-icons';
