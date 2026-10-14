import { Metadata } from 'next';
import { WebsiteSettingsView } from '@/modules/crm/components/Settings/WebsiteSettingsView';

export const metadata: Metadata = {
  title: 'Tùy chỉnh Giao diện Website | TaviWeb Admin',
};

export default function WebsiteSettingsPage() {
  return <WebsiteSettingsView />;
}
